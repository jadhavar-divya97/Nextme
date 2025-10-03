import React, { useState } from 'react';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './Components/NavBar';
import Profile from './Profile';
import Blog from './Blog';


// Social media icon images
import linkedinIcon from './assets/icons/linkedin.svg';
import githubIcon from './assets/icons/github.svg';
import instagramIcon from './assets/icons/instagram.png';
import whatsappIcon from './assets/icons/whatsapp.svg';



export default function Next() {
   const socialLinks = [
    {
      icon: linkedinIcon,
      text: 'LinkedIn',
      href: '#',
    },
    {
      icon: githubIcon,
      text: 'GitHub',
      href: '#',
    },
    {
      icon: instagramIcon,
      text: 'Instagram',
      href: '#',
    },
    {
      icon: whatsappIcon,
      text: 'WhatsApp',
      href: '#',
    },
    {
      icon: linkedinIcon,
      text: 'LinkedIn',
      href: '#',
    },
  ];


  
  const routes = {
    Blogs: '/blog',
    Links: '/links',
    Teams: '/teams',
  };


  
  // use state
  const [count , setCount] = useState(0);



    return (
        <div className='text-white'>
            <NavBar/>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/blog" element={<Blog />} />
                <Route path="/profile" element={<Profile socialLinks={socialLinks} routes={routes} />}/>
           </Routes>

           <h1 className='text-5xl'>{count}</h1>

<button onClick={ () => setCount(count + 1)} className='bg-primary m-6 p-5'>Run 1</button>
<button onClick={ () => setCount(count + 2)} className='bg-primary m-6 p-5'>Run 2</button>
<button onClick={ () => setCount(count + 3)} className='bg-primary m-6 p-5'>Run 3</button>
<button onClick={ () => setCount(count + 4)} className='bg-primary m-6 p-5'>Run 4</button>
<button onClick={ () => setCount(count + 6)} className='bg-primary m-6 p-5'>Run 6</button>


<button onClick={ () => setCount(count - 1)} className='bg-primary m-6 p-5'>Run -1</button>
<button onClick={ () => setCount(count - 2)} className='bg-primary m-6 p-5'>Run -2</button>
<button onClick={ () => setCount(count - 3)} className='bg-primary m-6 p-5'>Run -3</button>
<button onClick={ () => setCount(count - 4)} className='bg-primary m-6 p-5'>Run -4</button>
<button onClick={ () => setCount(count - 6)} className='bg-primary m-6 p-5'>Run -6</button>
        </div>
    );
}
