import './App.css'
import logo from './assets/logo-white.png'
import { Routes, Route } from 'react-router-dom'
import React from "react";
import Home from "./Paginas/Home/Home.jsx";
import Posts from "./Paginas/Posts/Posts.jsx";
import NewPost from "./Paginas/NewPost/NewPost.jsx";
import Errors from "./Paginas/Errors/Errors.jsx";
import Navigation from "./Paginas/Navigation/Navigation.jsx";
import DetailPost from "./Paginas/Detail-Blogpost/DetailPost.jsx";
function App() {

    return (
        <>
            <div className='background-colors'>
            <Navigation/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/newposts' element={<NewPost/>} />
        <Route path='/errors' element={<Errors/>}  />
        <Route path='/detailpost/:id' element={<DetailPost />} />
    </Routes>
            </div>
            </>
    )
}

export default App
