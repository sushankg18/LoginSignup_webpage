import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from './Signup.jpg';
import '../Signup/Signup.css';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        if (!fullName || !username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        const user = {
            fullName,
            username,
            email,
            password,
        };

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUsers.some((u) => u.email === email);

        if (userExists) {
            alert('User with this email already exists');
            return;
        }

        localStorage.setItem('users', JSON.stringify([...existingUsers, user]));

        alert('Signup successful! Please login.');
    };

    return (
        <div className='signup-div'>
            <div className='Form'>
                <div>
                    <h1>Register Now</h1>
                </div>
                <div className='form-details'>
                    <div>
                        <label>Full Name</label>
                        <input className='signup-input' type='text' placeholder='Enter Full Name' onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter Username</label>
                        <input className='signup-input' type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter Email</label>
                        <input className='signup-input' type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input className='signup-input' type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className='signup-btn' type='submit' onClick={handleSignup}>
                        Sign up
                    </button>
                </div>
                <div className='nav-to-login'>
                    <p>
                        Already have an Account? <Link to='/'> Login</Link>
                    </p>
                </div>
            </div>
            <div className='signup-div-img'>
                <img src={img} alt='' />
            </div>
        </div>
    );
};

export default Signup;
