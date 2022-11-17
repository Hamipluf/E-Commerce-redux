import React from 'react';
import { useNavigate } from 'react-router-dom';



function Proximamente() {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen my-8 bg-principal'>
            <div className='p-10 '>
                <button onClick={() => { navigate('/home') }} className="btn glass">Back To Home</button>
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="text-light max-w-md">
                            <h1 className="text-5xl p-10 font-bold">Hello there</h1>
                            <div className="card w-96 glass shadow-xl">
                                <div className="card-body">
                                    <p className="text-3xl">This section will be available soon.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proximamente