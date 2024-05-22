import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../common/Navbar';

const PostSingle = () => {
    const {id} = useParams();
    let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get(url).then(res =>{
            console.log(res.data)
            setPost(res.data)
        }).catch(err => {
            console.log('Error ', err.message);
        })
    }, [])

  return (
    <>
        {
            Object.keys(post).length ? (
                <div className='border'>
                    <img src={post.featured_src} />
                    <h1 className='text-3xl mb-3'>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html:post.content.rendered}}>
                    </div>
                </div>
            ) : ('Loading')
        }
    </>
  )
}

export default PostSingle