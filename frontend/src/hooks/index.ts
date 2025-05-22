import axios from 'axios';
import { useEffect, useState } from 'react'
import {BACKEND_URL} from '../config'

export interface Blog{
    "content": String;
    "title": String;
    "id": number;
    "author": {
        "name": String
    }
}
export const useBlog = ({id}:{id:Number}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })   
            .then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
            }) 
    }, [id])
    return {
        loading, 
        blog
    }

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                });
                setBlogs(response.data.blogs);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            }
        };

        fetchBlogs(); 
        const interval = setInterval(fetchBlogs, 5000);
        return () => clearInterval(interval); 
    }, []);

    return {
        loading,
        blogs,
    };
};
