import nPaxImage from "../../assets/npax-white.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //Sample credentials for testing
  const credentials = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
        if (email != credentials.email || password != credentials.password) {
            throw new Error("Invalid credentials");
        } else {

            setTimeout(() => {
                setLoading(false);
                alert("Login successful!");
                navigate("/admin/home");
            }, 1000);
        }
    } catch (err) {
        setTimeout(() => {
           setError("Login failed. Please try again.");
            console.log("Login Failed:", err);
            setLoading(false);
        }, 1000);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/adminBG.png')] select-none">
      <div className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center rounded-full">
            <img src={nPaxImage} alt="nPax Logo" className=" h-16" />
          </div>
          <h1 className="mt-3 text-white text-2xl font-semibold">WELCOME BACK</h1>
          <p className=" text-white/80 text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="text-white/90 text-sm">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/80"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="text-white/90 text-sm">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/80"
              placeholder="Enter your password"
            />
          </label>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
          <div className="py-8">
            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white hover:bg-white/25 hover:text-white text-[#183398] text-md font-bold py-1.5 rounded-full transition"
            >
                {loading ? "LOGGING IN..."  : "LOG IN"}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
