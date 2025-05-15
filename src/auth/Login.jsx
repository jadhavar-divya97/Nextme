
 import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter, FaApple } from 'react-icons/fa';

function Login(){
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'} min-h-screen flex flex-col items-center justify-center`}>
      <h1 className="text-4xl font-bold mb-6">Login</h1>

      <div className={`w-full max-w-sm p-6 rounded-lg shadow-lg ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black border'}`}>
        {/* Social Icons */}
        <div className="flex justify-between mb-4">
          <button className="p-2 hover:opacity-80"><FaGoogle /></button>
          <button className="p-2 hover:opacity-80"><FaFacebookF /></button>
          <button className="p-2 hover:opacity-80"><FaLinkedinIn /></button>
          <button className="p-2 hover:opacity-80"><FaTwitter /></button>
          <button className="p-2 hover:opacity-80"><FaApple /></button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-sm">Or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Email */}
        <label className="block mb-2 text-sm font-bold">Username</label>
        <input
          type="username"
          placeholder="Enter your username"
          className="w-full px-3 py-2 mb-4 rounded-md border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Password */}
        <label className="block mb-2 text-sm font-bold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 mb-4 rounded-md border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Remember Me */}
        <div className="flex items-center mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm">Remember Me</label>
        </div>

        {/* Log In Button */}
        <button className="w-full bg-secondary hover:bg-primary text-white font-semibold py-2 rounded-md mb-4 ">
          Log In
        </button>

        {/* Links */}
        <div className="text-center text-sm mb-2">
          Forgot your password? <a href="#" className="text-blue-400 underline">Reset Password</a>
        </div>
        <div className="text-center text-sm">
          <a href="#" className="underline">Create Account</a>
        </div>
      </div>

      
      </div>
   
  );
};
export default Login



       