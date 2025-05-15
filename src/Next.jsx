import React from 'react';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './Components/NavBar';
import Profile from './Profile';
import Blog from './Blog';


export default function Next() {
    return (
        <div className='text-white'>
            <NavBar/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
               <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                 <Route path="/profile" element={<Profile />} />
              <Route path="/blog" element={<Blog />} />



           </Routes>
        </div>
    );
}
