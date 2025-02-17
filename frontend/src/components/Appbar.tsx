import { Avatar } from './BlogCard'
import {Link} from 'react-router-dom'

export const Appbar = () => {
    return (
        <div className="w-full bg-white shadow-md border-b border-gray-200 flex items-center justify-between px-8 py-4">
            <Link to={'/'} className="text-3xl font-bold text-gray-900 font-sans tracking-tight hover:text-gray-700 transition">
                Medium
            </Link>
            <div className="flex items-center space-x-6">
                <Link to={`/publish`}>
                    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-6 py-2.5 transition shadow-md">
                        Publish
                    </button>
                </Link>  
                <Avatar name={'singking'} size={'big'} /> 
            </div>
        </div>
    )
}