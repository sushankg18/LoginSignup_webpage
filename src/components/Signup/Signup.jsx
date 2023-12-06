import React from 'react'
import img from './Signup.jpg'
import {Link} from 'react-router-dom'
import '../Signup/Signup.css'

const Signup = () => {
    return (
        <div className='signup-div'>
            <div className='Form'>
                <div>
                    <h1>Register Now</h1>
                </div>
                <div className='form-details'>
                    <div>
                        <label>Full Name</label>
                        <input type='text' placeholder='Enter Full Name' />
                    </div>
                    <div>
                        <label>Enter Username</label>
                        <input type='text' placeholder='Enter Username' />
                    </div>
                    <div>
                        <label>Enter Email</label>
                        <input type='Email' placeholder='Enter Email' />
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input type='password' placeholder='Enter Password' />
                    </div>
                    <button className='signup-btn' type='submit'>Sign up</button>
                </div>
                <div className='nav-to-login'>
                    <p>Already have an Account? <Link to='/'> Login</Link> </p>
                </div>
            </div>
            <div className='signup-div-img'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Signup
