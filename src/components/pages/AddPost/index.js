import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

function AddPost( { authUser } ) {
    // const user = localStorage.getItem('user');
    // console.log('user token is ', user.token);

    const formik = useFormik({
        // init 
        initialValues: {
            title: '',
            content: '',
            featured_image: null
        },

         // validation schema
         validationSchema: Yup.object({
            title: Yup.string().required(),
            content: Yup.string().required(),
            featured_image: Yup.mixed().required()
        }),

        // submit
        onSubmit: async (data) => {
            // console.log('data is ', data);
            // const {token} = JSON.parse(user);
            const {token} = authUser;


            // console.log('token is ', token);

            const headers = {
                Authorization : `Bearer ${token}`
            }

            let featuredMediaId = 0;

            if(data.featured_image) {
                // featured image
                const formData = new FormData();
                formData.append('file', data.featured_image);
    
                const res = await axios.post(`${process.env.REACT_APP_API_ROOT}/media`, formData, {
                    headers: headers,
                    'Content-Type': 'multipart/form-data'
                })
                featuredMediaId = res.data.id
            }
            
            // create post
            const post = {
                // ...data,
                title: data.title,
                content: data.content,
                status: 'publish'
            }

            if(featuredMediaId) post.featured_media = featuredMediaId;


            // console.log('post', post);

            axios.post(`${process.env.REACT_APP_API_ROOT}/posts`, post, {
                headers: headers
            })
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('error ', err.message);
            })
        }
    });

    // console.log('values of formik ', formik.values);
    // console.log('errors of formik ', formik.errors);

  return (
    <div className='container mx-auto py-10'>
        <h1 className='text-3x1 font-bold mb-5'>Create a new post to send wordpress posts</h1>
        <form onSubmit={formik.handleSubmit}>
            <div className='mb-5'>
                <label className='block text-gray-700 font-bold'>
                    Post Title
                </label>
                <input 
                    className='shadow border-2 w-full px-3'
                    type='text'
                    name='title'
                    placeholder='Enter post title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
            </div>

            <div className='mb-8'>
                <label className='block text-gray-700 font-bold'>
                    Post Content
                </label>
                <textarea 
                    className='shadow border-2 w-full px-3'
                    type='textarea'
                    name='content'
                    placeholder='Enter post content'
                    value={formik.values.content}
                    onChange={formik.handleChange}
                ></textarea>
            <div className='mb-5'>
                <label for="featured_image" className='block text-gray-700 font-bold'>
                    Featured Image
                </label>
                <input 
                    className='shadow border-2 w-full px-3'
                    type='file'
                    id="featured_image"
                    name='featured_image'
                    // value={formik.values.featured_image} 
                    onChange={ (e) => {formik.setFieldValue('featured_image', e.target.files[0])} }
                />
            </div>
                <button className='bg-blue-500 hove:bg- blue-700 text-white font-bold p-3'>Submit post</button>
            </div>


        </form>
    </div>
  )
}

export default AddPost