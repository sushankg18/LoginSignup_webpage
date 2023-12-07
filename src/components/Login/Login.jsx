import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import img from './LoginImg.jpg'
import "../Login/Login.css"

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault()
    }
    return (
        <div className='login-div'>
            <div className='Form'>
                <div>
                    <h1>Login</h1>
                </div>
                <form className='form-details'>
                    <div>
                        <label>Enter Username</label>
                        <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter Email</label>
                        <input type='Email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" onClick={handleLogin}>Login</button>
                </form>
                <div className='nav-to-login'>
                    <p>Don't have an Account? <Link to='/Signup'> Sign up</Link> </p>
                </div>
            </div>
            <div className='signup-div-img'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Login
