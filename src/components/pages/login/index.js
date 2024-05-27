import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../../redux/slice/authSlice';

function Login() {
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);

    const formik = useFormik({
        // init values
        initialValues: {
            email: 'afsarwebdev@gmail.com',
            password: 'afsarme'
        },

        // validation schema
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required().min(5)
        }),

        // on submit
        onSubmit: (data) => {

            // const {email, password} = data;

            // console.log('data is ', data);

            dispatch(login(data))
            /*
            let url = `${process.env.REACT_APP_API_AUTH_TOKEN}`;
            axios.post("http://afsarme.test/wp-json/jwt-auth/v1/token", {
                "username": email,
                "password": password
            }).then((res) => {
                console.log('response ', res);

                if(res.status === 200 && res.statusText === "OK") {
                    localStorage.setItem('user', JSON.stringify(res.data));
                    alert(res.data.user_nicename)
                }

            }).catch((err) => {
                console.log('Errors ', err);
            })
            console.log('formik data ', data);

            */

        }

    })
    // console.log('Formik values', formik.values);
    // console.log('Formik errors', formik.errors);
  return (
    <>
        <section className='h-screen'>
            <div className='container px-6 py-12 h-full'>
                <div className='flex justify-center items-center flex-wrap h-full g-6 '>
                    <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
                       {/* img */}

                    </div>
                    <div className='md:8/12 lg:w-5/12 lg:ml-20'>
                        <h1 className='font-bold text-6x1 text-center mb-5'>
                            Login
                        </h1>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='mb-6'>
                                <input  
                                    type="email"
                                    className='form-control block w-full px-4 py-2 text-x1 border-2'
                                    placeholder='Email address'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className='mb-6'>
                                <input 
                                    type="password"
                                    className='form-control block w-full px-4 py-2 text-x1 border-2'
                                    placeholder='Password'
                                    name='password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className='inline-block px-7 py-3 bg-blue-600 text-white disabled:cursor-wait disabled:bg-blue-500 disabled:text-slate-100'
                                data-mdb-ripple='true'
                                data-mdb-ripple-color='light'
                                disabled={auth.isLoading}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login