import axios from 'axios';
import { useEffect, useState, useRef } from 'react'
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
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
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
  
      const startPolling = () => {
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            if (document.visibilityState === "visible") {
              fetchBlogs();
            }
          }, 5000);
        }
      };
  
      const stopPolling = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
  
      startPolling();
      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
          stopPolling();
        } else {
          startPolling();
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => {
        stopPolling();
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    }, []);
  
    return {
      loading,
      blogs,
    };
  };
