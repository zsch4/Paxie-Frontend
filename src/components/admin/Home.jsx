import { FileText } from "lucide-react";
import nPaxImage from "../../assets/npax-white.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotIcon from "../BotIcon";

export default function Home() {
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const document = {
         "fileName": "string",
            "documentType": 0,
            "data": "string",
            "uploaded": "2025-11-11T05:24:58.175Z"
    }
    const data = [
        { id: 1, name: "About.docx"},
        { id: 2, name: "Services.docx"},
        { id: 3, name: "Careers.docx"},
    ];  

    useEffect(() => {
       setTimeout(() => {
           setLoading(false);
       }, 2000); 
    },[]);

    const handleUpload = async () => {
        setUploading(true);
        setError("");

        try {

            setTimeout(() => {      
                setUploading(false);
                console.log("Upload successful:", file);
                alert("Upload successful!");
            }, 1000);

        } catch (err) {
            setError("Upload Failed:", err);
            setUploading(false);

        }
    }

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
        navigate("/admin/login");
    }

    return (
        <>
        { !loading ? (
            <div className="flex flex-col min-h-screen bg-[url('/adminBG.png')] bg-cover bg-center select-none">
                    <nav className="w-full p-2.5 px-5 flex justify-between items-center bg-[#003bad]/50 backdrop-blur-lg border-b border-white/10">
                        <div className="flex items-center justify-center gap-2">
                            <img src={nPaxImage} alt="nPax Logo" className=" h-8" />
                            <div className="bg-white rounded-full p-1">
                                <BotIcon h={30} w={30}/>
                            </div>
                            <label className="text-white font-semibold text-xl">AI KNOWLEDGE EMBEDDING MANAGER</label>
                        </div>
                    
                        <div>
                            <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
                        </div>
                    </nav> 

                    <div className="flex items-center flex-col md:flex-row lg:flex-row justify-between gap-10 m-10 ">
                        <div className="w-full  p-8 px-16 pb-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl">
                            <h1 className="text-2xl font-bold text-white pb-3 mb-4">Upload Files</h1>
                            <div className="flex flex-col m lg:flex-row justify-between gap-6">
                                <div className="flex w-full flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-lg h-64 hover:bg-white/10 cursor-pointer">
                                    <input 
                                        onChange={(e) => setFile(e.target.files[0])}
                                        type="file" 
                                        className="border border-white/20 rounded-full cursor-pointer text-white" 
                                    />
                                    <p className="text-white/90 mt-4">Click to upload or drag and drop</p>
                                </div>
                                <div> 
                                    {file != null && <div className="w-[280px] flex p-2 w- bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 cursor-pointer">
                                        <FileText className="mr-2 text-white/90" />
                                        <p className="text-white/90">{file.name}</p>
                                    </div>}

                                    <button onClick={handleUpload} className="mt-6 w-[280px] bg-white/90 hover:bg-white/50 text-[#003bad] font-semibold py-2 px-4 rounded-lg shadow-lg">
                                        {uploading ? "Uploading..." : "Upload File"}
                                    </button>
                                </div> 
                            </div>
                            
                        </div>
                        <div className="md:w-1/3 lg:1/3 w-full h-[75vh] p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl 
                            overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-white/50"
                        >
                            <h1 className="text-2xl font-bold text-white pb-3 border-b-2 border-b-white/50">Data List</h1>
                            {
                                data.map(item => (
                                    <div key={item.id} className="flex mt-2.5 p-2 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 cursor-pointer">
                                        <FileText className="mr-2 text-white/90" />
                                        <p className="text-white/90">{item.name}</p>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
            </div>
        ) : (
            <div className="min-h-screen flex items-center justify-center bg-[url('/adminBG.png')] select-none">
                <div className="absolute inset-0 bg-black/50"></div> 
                <div className="absolute text-center">
                    <div className="inline-flex items-center justify-center rounded-full animate-bounce">
                        <BotIcon h={250} w={250} className="text-white/80"/>
                    </div>
                </div>
            </div>
        )
    }
        </>
    );
}