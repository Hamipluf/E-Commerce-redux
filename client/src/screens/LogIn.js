import React, { useRef, useState, useEffect } from 'react';
import { auth } from "../feature/firebase-config";
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';




function LogIn() {
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser)
    const [error, setError] = useState();



    // Verificando si ya ingreso o si debe ingresar
    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            // console.log(userAuth)
            if (userAuth) {
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    }));
                navigate('/home')
            } 
        })
    }, [])

// Ingresando al user 
    const logIn = async (e) => {
        e.preventDefault();
        try {
            const sigin = await auth.signInWithEmailAndPassword(
                email.current.value,
                password.current.value
            );
            console.log(sigin)
            console.log("Se autentico correctamente");
            navigate('/home')
        } catch (err) {
            // console.log(err.message);
            setError(err.message)
        }
    };
    return (
        <div>
            <div className="hero min-h-screen bg-login">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center text-dark lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-lg font-semibold ">Welcome to my E-Commerce shop, you can fill in the form to log in with an account. If you are not registered click on the sign up button.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-dark">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={email} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={password} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button onClick={() => { navigate('/signin') }} className="label-text-alt link link-hover">Don't have acount, Sing up NOW!</button>
                                </label>
                                {error && <h2 className='text-error text-lg font-bold'>{error}</h2>}
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={logIn} className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
