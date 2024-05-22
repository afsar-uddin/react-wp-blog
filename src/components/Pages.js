import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Posts from './pages/posts/Posts'
import Navbar from './common/Navbar'
import PostSingle from './pages/posts/PostSingle'
import Login from './pages/login'

function Pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostSingle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Pages