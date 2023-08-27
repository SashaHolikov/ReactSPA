import React from 'react'
import './nav.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import Post from '../posts/post';
import Photos from '../photos/photos';
import Contact from '../contacts';

function Nav () {
    return (
        <div className='contenier'>
            <BrowserRouter>
            <nav className='nav_main'>
                <Link to='/home' className='link' >Home</Link>
                <Link to='/post'className='link'>Post</Link>
                <Link to='/photo'className='link'>Photo</Link>
                <Link to='/contact'className='link'>Contact</Link>
            </nav>
            
            <Routes>
                <Route path='home' element={<Home/>}></Route>
                <Route path='post'element={<Post/>}></Route>
                <Route path='photo' element={<Photos/>}></Route>
                <Route path='contact' element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter>
        
    </div>
    )
}

export default Nav