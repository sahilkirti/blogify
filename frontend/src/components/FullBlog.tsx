import {Appbar} from "./Appbar"
import {Blog} from "../hooks"
import { Avatar } from "./BlogCard"
export const FullBlog = ({blog}: {blog: Blog}) => {
    return (
        <div>
            <Appbar/>
            <div className="grid grid-cols-12 px-10 max-w-screen pt-10 ">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd Febrauary 2025
                    </div >
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-800 ">
                        Author
                    </div>
                    <div className="flex ">
                        <div className="pr-4 flex flex-col justify-center"> 
                            <Avatar size="small" name={blog.author.name || "Anonymous"}/>
                        </div>
                        <div className="pt-2">
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                A campfire is the heart of night camping. Gather around it to share stories, sing songs, or play games.
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}