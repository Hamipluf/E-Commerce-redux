import React, { useRef } from 'react';
import { auth } from "../feature/firebase-config";
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../feature/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';




function LogIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser)



    // Verificando si ya ingreso o si debe ingresar
    const logIn = async () => {
        await auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                // console.log(authUser);
                console.log("Se autentico correctamente");
            })
            .catch(err => { alert(err.message); }
            );
        // Logged in
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // Logged in
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            }
        })
        navigate('/home')

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
                                <input ref={emailRef} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button onClick={() => { navigate('/signin') }} className="label-text-alt link link-hover">Don't have acount, Sing up NOW!</button>
                                </label>
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
