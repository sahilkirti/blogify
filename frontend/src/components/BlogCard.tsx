import { Link } from 'react-router-dom'
interface BlogCardProps {
    id: number;
    authorName: String;
    title: String;
    content: String;
    publishedDate: String;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate}: BlogCardProps) => {
    return (
        <Link to = {`/blog/${id}`}>
            <div className="p-4  border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <Avatar name={authorName} size={"small"}/>
                    <div className="flex flex-col justify-center font-extralight pl-2 text-sm"> {authorName}</div> 
                    <div className="flex flex-col justify-center pl-2"> <Circle/> </div>
                    <div className=" flex flex-col justify-center pl-2 font-thin text-slate-500 text-sm">{publishedDate}</div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin"> 
                    {content.slice(0,200) + '...'}
                </div>
                <div className="text-slate-400 text-sm font-thin pt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`} 
                </div>
            </div>  
        </Link>
    )
}
export function Circle () {
    return (
        <div className="h-1 w-1 rounded-full bg-slate-200">
        </div>
    )
}
export function Avatar({ name,size="small" }:{name: String, size: "small"|"big"}) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6": "w-10 h-10" } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`${size === "small"? "text-xs": "text-lg" } font-medium text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
)}