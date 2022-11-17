import React, { useRef } from 'react';
import { auth } from "../feature/firebase-config";
import { useNavigate } from 'react-router-dom';


function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();



    // Registrando Usuario 
    const register = () => {
        navigate('/home');
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch(err => { alert(err.message); }
            );
        window.location.reload(true)
    }


    return (
        <div>
            <div className="hero min-h-screen bg-signin text-dark">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                        <p className="py-6">Register with your email and password of your choice.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-light">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-dark">Your Email</span>
                                </label>
                                <input ref={emailRef} type="text" placeholder="email" className="input text-light input-bordered input-accent w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-dark">Create Password</span>
                                </label>
                                <input ref={passwordRef} type="password" placeholder="password" className="input text-light  input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-dark">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={register} className="btn btn-accent">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn