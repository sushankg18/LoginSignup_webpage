import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from './LoginImg.jpg';
import '../Login/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if ((!username && !email) || !password) {
            alert('Please enter username/email and password');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const matchedUser = users.find(
            (user) => (user.username === username || user.email === email) && user.password === password
        );

        if (matchedUser) {
            alert('Login successful!');
            window.location.href = '/home'
        } else {
            alert('Invalid username/email or password');
        }
    };

    return (
        <div className='login-div'>
            <div className='Form'>
                <div>
                    <h1>Login</h1>
                </div>
                <form className='form-details'>
                    <div>
                        <label>Enter Username/Email</label>
                        <input
                            type='text'
                            placeholder='Enter Username or Email'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' onClick={handleLogin}>
                        Login
                    </button>
                </form>
                <div className='nav-to-login'>
                    <p>
                        Don't have an Account? <Link to='/Signup'> Sign up</Link>{' '}
                    </p>
                </div>
            </div>
            <div className='signup-div-img'>
                <img src={img} alt='' />
            </div>
        </div>
    );
};

export default Login;
