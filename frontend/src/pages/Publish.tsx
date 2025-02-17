import { Appbar } from "../components/Appbar"
import axios from "axios"
import {  useState,ChangeEvent } from "react";
import {BACKEND_URL} from "../config"
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate()
    return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
        <Appbar />
        <div className="mt-10 w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">     
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Post</h2>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 mb-4 outline-none " placeholder="Title"/>
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }}/>
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content:description    
                    },{
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type ="submit" className="mt-6 w-full text-lg font-medium px-5 py-2 text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300">Publish Post</button>         
        </div>
    </div>
    )
}
function TextEditor ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
    <div className="w-full">
        <label className="text-gray-700 font-medium block mb-2">Publish post</label>
        <textarea onChange={onChange} id="editor" rows={8} className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 outline-none resize-none" placeholder="write an aritcle..." required/>
    </div>        
    )
}