import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignUpValidation';
import axios from 'axios';
import backgroundImage from './sam1.jpg';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-end vh-100'
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-white p-3 rounded w-25'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                            onChange={handleInput} className='form-control rounded' />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter email' name='email'
                            onChange={handleInput} className='form-control rounded' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter password' name='password'
                            onChange={handleInput} className='form-control rounded' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Sign up</button>
                    <p>Already have an account?</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
