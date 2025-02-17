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
    <div className="min-h-screen bg-gray-50">
        <Appbar />
        <div className="flex justify-center pt-10 ">
            <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Create Post</h2>
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="w-full bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="Title"/>
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
                }} type ="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800">Publish Post</button>

            </div>
        </div>
    </div>
    )
}
function TextEditor ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="mt-2">
            <div className="w-full mb-2">
                <div className="flex items-center justify-between border">
                    <div className="my-2 bg-white rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full test-sm text-gray-800 bg-white border-0 pl-2" placeholder="write an aritcle..." required/>
                    </div>
                </div>
            </div>
        </div>
    )
}