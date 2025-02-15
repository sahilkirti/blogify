import {Hono} from 'hono';
import { sign } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinInput, signupInput } from '@sahilkirti/medium-blog';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message:"Invalid Input"
        })
    } 
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            jwt: token
        });
    } catch (error) {
        console.error("Signup Error:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
});

userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message:"Invalid Input"
        })
    }

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const user = await prisma.user.findUnique({
            where:{
                email: body.email,
                password: body.password
            }
        })
        if(!user){
            c.status(403);
            return c.json({error: "User not found"});
        }
        const jwt = await sign({id: user.id},c.env.JWT_SECRET);
        return c.json({jwt})
    } catch(error){
        console.error("Signin Error:", error);
        return c.json({ error: "Internal Server Error" }, 500);
    }
});
