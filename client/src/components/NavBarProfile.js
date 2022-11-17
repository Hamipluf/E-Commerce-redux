import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import phone from '../img/smartphone.png';
import { auth } from "../feature/firebase-config";
import { logout } from '../feature/user/userSlice';


function NavBarProfile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        auth.signOut();
        window.location.reload(true)
        const unsuscribe = auth.onAuthStateChanged(
            (userAuth) => {
                if (userAuth) {
                    //Logged out
                    dispatch(logout())
                }
            });
        return unsuscribe //equivale a la funcion de limpieza

    }
    return (
        <>
            <div className="navbar z-10 bg-dark">
                <div className="flex-1">
                    <button onClick={() => { navigate('/home') }} className="btn btn-ghost normal-case phone:text-sm text-lg desktop:text-xl"><img className='w-9 h-9 desktop:w-11 desktop:h-11 phone:w-8 ' src={phone} alt="phone buy" /> E-Commerce </button>
                </div>
                <div className="flex-none text-light tablet:px-5 text-sm">
                    <ul className="menu menu-horizontal z-10 p-0">
                        <li tabIndex={0}>
                            <a>
                                Menu
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-dark">
                                <li><button onClick={() => { navigate('/home') }}>Home</button></li>
                                <li><Link to='/proximamente'>Addresses</Link></li>
                                <li><Link to='/proximamente'>My Orders</Link></li>
                                <li><Link to='/cart'>My Cart</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-7 desktop:w-14 desktop:mr-2 rounded-full">
                            <img src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-icono-persona-en-la-ilustraci%C3%B3n-vectorial.jpg?ver=6" alt='Imagen de Perfil' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <Link to='/profile' className="justify-between">Profile </Link>
                        </li>
                        <li><button onClick={signOut}>Log Out</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBarProfile