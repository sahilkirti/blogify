import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {Hono} from 'hono';
import {verify} from 'hono/jwt'
import { createBlogInput,updateBlogInput } from '@sahilkirti/medium-blog';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
      userId: string;
    }
}>();

blogRouter.use('/*', async (c,next) => {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET)as { id: string };
    if(user) {
      c.set("userId", user.id);             
      await next();
    }
    else {
      c.status(403);
      return c.json({
        message: "you are not logged in"
      }) 
    }

})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Invalid Input"
      })
    }

    const authorId = c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    const blog = await prisma.blog.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: Number(authorId)
        }
    })
    return c.json({
      id: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Invalid Input"
      })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
          id: body.id                   //blog id which blog want to update;
        },
        data: {
          title: body.title,
          content: body.content
        }
    })
    return c.json({
      id: blog.id
    })
})
//pagination------------------------
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true
          } 
        }
      }

    });
    return c.json({
      blogs
    });
})


blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    try{
      const blog = await prisma.blog.findUnique({
          where: {
            id: Number(id)
          },
          select: {
            id: true,
            title: true,
            content: true,
            author: {
              select: {
                name: true
              }
            }
          }
      })
      return c.json({
        blog
      });
    } catch (err) {
        c.status(411)
        return c.json({
          message: "error while fetching blog post"
      });
    }
})

