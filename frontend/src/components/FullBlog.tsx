import {Appbar} from "./Appbar"
import {Blog} from "../hooks"
import { Avatar } from "./BlogCard"
export const FullBlog = ({blog}: {blog: Blog}) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Appbar/>
            <div className="grid grid-cols-12 gap-8 px-16 max-w-screen-xl mx-auto pt-16">
                <div className="col-span-9">
                    <div className="text-6xl font-black tracking-tight text-gray-900 leading-tight">
                        {blog.title}
                    </div>
                    <div className="text-gray-600 pt-4 text-lg">
                        Published on <span className="font-semibold">2nd February 2025</span>
                    </div >
                    <div className="border-b border-gray-200 pb-4 mt-4"></div>
                    <div className="pt-6 text-lg leading-relaxed text-gray-800">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="bg-white shadow-md rounded-xl p-4">
                        <div className="text-gray-800 text-lg font-semibold border-b border-gray-200 pb-3">
                            Author
                        </div>
                        <div className="flex pt-4">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-gray-600 text-sm leading-relaxed">
                                    Passionate about sharing ideas through words. Exploring stories, insights, and perspectives—one blog at a time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}