import { CircleX, FileText, LoaderCircle, LoaderIcon } from "lucide-react";
import nPaxImage from "../../assets/npax-white.png";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BotIcon from "../BotIcon";
import { convertFileToBytes } from "../../utils/FileConverter";
import { api } from "../../api/api";

export default function Home() {
    const [uploading, setUploading] = useState(false);
		const [deleting, setDeleting] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
		const [networkError, setNetworkError] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
		const [documents, setDocuments] = useState([]);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
			setTimeout(() => {
					getAllDocuments();
			}, 1000); 
    },[]);

    const getAllDocuments = async () => {
			try {
				const res = await api.getDocuments();
				console.log("Fetched documents:", res.data);
				setDocuments(res.data);
				setLoading(false);
		} catch (e) {
				console.error("Error fetching documents:", e.message);
				setNetworkError(e.message || "Something went wrong");
				setLoading(false);
		}
    };

    // const handleUpload = async () => {
    //     setUploading(true);
    //     setError("");

    //     try {

    //         setTimeout(() => {      
    //             setUploading(false);
    //             console.log("Upload successful:", file);
    //             alert("Upload successful!");
    //         }, 1000);

    //     } catch (err) {
    //         setError("Upload Failed:", err);
    //         setUploading(false);

    //     }
    // }

    const handleUpload = async () => {
			if (!file) {
				alert("Please select a file to upload.");
				return;
			}

			setUploading(true);
			setError("");

			if (!file) return;

			var docType;

			if (file.type === "application/pdf") {
				docType = 0; // PDF
			} 
			else if (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
				docType = 1; // Word Document
			} 
			else if (file.type === "application/vnd.ms-excel" || file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
				docType = 2; // Excel Spreadsheet
			} 
			else {
				setError("Unsupported File Type");
				setUploading(false);
				return;
			}

			try {
				const { byteArray, base64String } = await convertFileToBytes(file);

				console.log("PDF as byte array:", byteArray);
				console.log("PDF as Base64:", base64String);

				const document = {
					FileName: file.name,
					DocumentType: docType,
					Data: base64String,
					Uploaded: new Date().toISOString(),
				};

				console.log("Prepared document object:", document);

				const res = await api.addDocument(document);

				// setTimeout(() => {
				setUploading(false);
				setFile(null);
				console.log("Upload successful:", res);
				getAllDocuments();
				// }, 1000);

			} catch (e) {
				console.error("Upload failed:", e);
				setError("Upload Failed. Try again later.");
				setUploading(false);
			}
    };

		const handleDelete = (documentId) => async () => {
			setCurrentId(documentId);
			setDeleting(true);
			if (!window.confirm("Are you sure you want to delete this document?")) {
				return;
			}

			try {
				await api.deleteDocument(documentId);
				console.log("Document deleted successfully!");
				setDeleting(false);
				setCurrentId(null);
				getAllDocuments();
			} catch (e) {
				console.error("Error deleting document:", e);
				setDeleting(false);
				alert("Failed to delete document.");
			}
		};

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

				<div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 m-10 ">
					{/* Upload Files */}
					<div className="w-full p-8 px-16 pb-16 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl">
						<h1 className="text-2xl font-bold text-white pb-3 mb-4">Upload Files</h1>
						<div className="flex flex-col m lg:flex-row justify-between gap-6">
							<div className="flex w-full relative flex-col items-center justify-center border-2 border-dashed border-white/30 rounded-lg h-64 hover:bg-white/10 cursor-pointer">
								<input 
									onChange={(e) => setFile(e.target.files[0])}
									type="file" 
									accept=".pdf, .docs, .docx, .xls, .xlsx"
									className="border border-white/20 cursor-pointer text-white w-full h-full absolute opacity-0" 
								/>
								<p className="text-white/90 mt-4">Click to upload or drag and drop</p>
							</div>

							<div> 
									{file != null && <div className="w-[280px] flex p-2 w- bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 cursor-pointer">
											<FileText className="mr-2 text-white/90" />
											<p className="text-white/90">{file.name}</p>
									</div>}
									
									{error && <p className={`text-red-600 text-sm mt-2 font-medium
									bg-white p-1.5 px-2 rounded-b-lg`}>{error}</p>}

									<button onClick={handleUpload} disabled={uploading} className="mt-6 w-[280px] bg-white/90 hover:bg-white/50 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg">
										<span>{uploading ? (
											<div className="flex items-center justify-center">
												<LoaderCircle className="animate-spin mr-2"/>
												Uploading...
											</div>
										) : "Upload File"}</span>
									</button>
							</div> 
						</div>
					</div>

					{/* Document List */}
					<div className="md:w-1/2 lg:1/3 w-full h-[75vh] p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl 
							overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full
					[&::-webkit-scrollbar-thumb]:bg-white/50"
					>
							<h1 className="text-2xl font-bold text-white pb-3 border-b-2 border-b-white/50">Data List</h1>
							{documents && documents.length > 0 ? (
								documents.map(item => (
										<div key={item.documentId} className="flex mt-2.5 p-2 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 cursor-pointer">
											<FileText className="mr-2 text-white/90" />
											<p className="text-white/90">{item.fileName}</p>
											<button onClick={handleDelete(item.documentId)} className="ml-auto" disabled={deleting}>
												{deleting && currentId === item.documentId ? (
													<LoaderCircle className="text-white/90 animate-spin"/>
												) : (
													<CircleX size={20} className=" text-white/90 ext-white/90 transition-transform duration-200 hover:scale-125"/>
												)}
											</button>
										</div>
								)) 
							) : (
								 <>
							{ networkError ? (
								<p className="text-red-500 text-sm mt-2 font-medium text-center">Error fetching documents: {networkError}</p>
								) : (
									<p className="text-white/90 mt-4 text-center">No documents uploaded yet.</p>
								)}
									</>
								)}
							
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