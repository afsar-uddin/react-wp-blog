import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Posts from './pages/posts/Posts'
import Navbar from './common/Navbar'

function Pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  )
}

export default Pages