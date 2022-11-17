import React from 'react'
import { useNavigate } from 'react-router-dom'
function Principal() {
    const navigate = useNavigate();

    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen bg-principal ">
                <div className="hero-content text-center">
                    <div className="text-light max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <div className='card glass m-5'>
                            <p className="py-6 text-lg font-medium ">Welcome to my E-Commerce web, this is a demonstration of an e-commerce, with shopping cart, products and interactive pages.<br />Please login or register to see the complete website..</p>
                        </div>
                        <button onClick={() => { navigate('/login') }} className="btn mx-3 btn-primary">Log In</button>
                        <button onClick={() => { navigate('/signin') }} className="btn mx-3 btn-info">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal