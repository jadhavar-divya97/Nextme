import React, { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
 
const socialLinks = [
  {
    icon: <FaLinkedin className="text-blue-600" />,
    text: 'LinkedIn',
    href: '#',
  },
  {
    icon: <FaGithub className="text-gray-800" />,
    text: 'GitHub',
    href: '#',
  },
  {
    icon: <FaInstagram className="text-pink-500" />,
    text: 'Instagram',
    href: '#',
  },
  {
    icon: <FaWhatsapp className="text-green-500" />,
    text: 'WhatsApp',
    href: '#',
  },
];
 
const routes = {
  Blogs: '/blog',
  Links: '/links',
  Teams: '/teams',
};
 
function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };
 
  return (
    <div className="min-h-screen bg-purple-500 font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white-500 p-4">
        <div className="bg-white rounded-full px-5 py-3 flex justify-between items-center shadow-md max-w-md 5xl mx-auto">
          <div className="text-black font-bold text-xl">Divya</div>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 text-black font-medium">
           {Object.entries(routes).map(([label, path]) => (
              <Link
                to={path}
                key={label}
                className="block hover:text-purple-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
 
          {/* Hamburger Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <HiX className="text-2xl text-black" />
              ) : (
                <HiMenu className="text-2xl text-black" />
              )}
            </button>
          </div>
        </div>
 
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow px-6 py-2 space-y-2 text-black font-medium text-sm">
            {['Blogs', 'Links', 'Teams'].map((label) => (
              <Link
              to={'/blog'}
                key={label}
                className="block hover:text-purple-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
 
      {/* Profile Section */}
      <main className="flex flex-col items-center text-center text-white py-12 px-4">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-4">
          <img
            src={profilePic || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="w-full h-full rounded-full border-4 border-white object-cover shadow-md"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            title="Click to upload"
          />
        </div>
 
        <h1 className="text-2xl font-bold">@midivya</h1>
 
        <div className="flex gap-4 mt-2 mb-2">
          <a href="mailto:example@email.com" className="hover:text-purple-100">
            <FaEnvelope className="text-purple-200 text-2xl" />
          </a>
          <a href="tel:+1234567890" className="hover:text-purple-100">
            <FaPhone className="text-purple-200 text-2xl" />
          </a>
        </div>
 
        <p className="font-semibold text-black mt-1">Hello, I'm Divya Jadhavar</p>
 
        {/* Social Buttons */}
        <div className="mt-6 w-full max-w-md space-y-4">
          {socialLinks.map(({ icon, text, href }) => (
            <a
              href={href}
              key={text}
              className="bg-white text-black p-4 rounded-lg flex items-center shadow hover:bg-gray-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-2xl mr-4">{icon}</span>
              <span className="font-medium">{text}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
 
export default Profile;
 