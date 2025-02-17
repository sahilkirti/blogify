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
            <div className="p-6 border border-gray-200 bg-white shadow-lg rounded-lg transition hover:shadow-xl hover:-translate-y-1 max-w-2xl mx-auto cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                    <Avatar name={authorName} size="small" />
                    <span className="text-gray-700 text-sm font-medium">{authorName}</span>
                    <Circle />
                    <span className="text-gray-500 text-sm">{publishedDate}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">{title}</h2>
                <p className="text-gray-600 text-md mt-2 leading-relaxed">
                    {content.slice(0, 200) + '...'}
                </p>
                <div className="text-gray-400 text-sm font-light mt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`} 
                </div>
            </div>  
        </Link>
    )
}
export function Circle () {
    return <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>;
}

export function Avatar({ name,size="small" }:{name: String, size: "small"|"big"}) {
    return (
        <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6": "w-10 h-10" } overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 rounded-full dark:bg-gray-600`}>
            <span className={`${size === "small"? "text-xs": "text-lg" } font-medium text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
)}