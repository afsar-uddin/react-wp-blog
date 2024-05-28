import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Posts() {
    // let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const [posts, setPost] = useState([]);
    
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts?per_page=10&page=${currentPage}`;
        axios.get(url).then((res) => {
            const {data, headers} = res;
            setTotalPages(Number(headers['x-wp-totalpages']));
            setPost(res.data)
        });

    }, [currentPage])
    
  return (
    <>
        {
            Object.keys(posts).length ? posts.map((post) => {
                return (
                    
                    <div className='single-post border p-5 m-10 shadow-lg' key={post.id}>
                        <Link to={`/posts/${post.id}`}><h3 className='text-4xl font-bold mb-5 mt-5'>{post.title.rendered}</h3></Link>
                        <Link to={`/posts/${post.id}`}>View more</Link>
                        <br />
                        <small>{post.date}</small>
                    </div>
                )
            }) : 'Loading'
        }

        {/* pagination */}
        <div className='w-4/5 py-10 m-auto flex justify-between align-middle flex-wrap gap-10'>
            <button className='btn-primary' 
            disabled = {currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            {/* pagination number */}
            <span>{currentPage} of {totalPages}</span>
            <button className='btn-primary' 
            disabled = {currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
    </>
  )
}

export default Posts