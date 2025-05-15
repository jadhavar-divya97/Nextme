import React, { useState } from 'react';
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaApple,
} from 'react-icons/fa';

function Signup() {
  const [darkMode, setDarkMode] = useState(true);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Proceed with form submission or API call
      console.log({ fullname, email, mobile, dob, password });
    }
  };

  const inputStyles = `w-full px-3 py-2 mb-4 rounded-md border focus:outline-none ${
    darkMode
      ? 'bg-black text-white border-gray-600 placeholder-gray-400'
      : 'bg-white text-black border-gray-300 placeholder-gray-500'
  }`;

  return (
    <div
      className={`${
        darkMode ? 'bg-dark text-white' : 'bg-white text-dark'
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-4xl font-bold mb-6">Signup</h1>

      <div
        className={`w-full max-w-sm p-6 rounded-lg shadow-lg ${
          darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black border'
        }`}
      >
        {/* Social Icons */}
        <div className="flex justify-between mb-4">
          <button className="p-2 hover:opacity-80">
            <FaGoogle />
          </button>
          <button className="p-2 hover:opacity-80">
            <FaFacebookF />
          </button>
          <button className="p-2 hover:opacity-80">
            <FaLinkedinIn />
          </button>
          <button className="p-2 hover:opacity-80">
            <FaTwitter />
          </button>
          <button className="p-2 hover:opacity-80">
            <FaApple />
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-sm">Or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Form Fields */}
        <label className="block mb-2 text-sm font-bold">Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className={inputStyles}
        />

        <label className="block mb-2 text-sm font-bold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyles}
        />

        <label className="block mb-2 text-sm font-bold">Mobile No</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className={inputStyles}
        />

        <label className="block mb-2 text-sm font-bold">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={inputStyles}
        />

        <label className="block mb-2 text-sm font-bold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputStyles}
        />

        <label className="block mb-2 text-sm font-bold">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={inputStyles}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Signup Button */}
        <button
          className="w-full bg-secondary hover:bg-primary text-white font-semibold py-2 rounded-md mb-4 "
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
