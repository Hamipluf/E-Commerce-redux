import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import phone from '../img/smartphone.png';
import { auth } from "../feature/firebase-config";
import { logout } from '../feature/user/userSlice';


function NaBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products)
    const total = useSelector(state => state.products.total)



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
    // console.log(product.producto)

    return (
        <div>
            <div className="navbar bg-dark">
                <div className="flex-1">
                    <button onClick={() => { navigate('/home') }} className="btn btn-ghost normal-case text-lg desktop:text-xl"><img className='w-9 h-9 desktop:w-11 desktop:h-11 mx-2' src={phone} alt="phone buy" /> E-Commerce</button>
                </div>

                <div className="flex-none">
                    < div className="dropdown dropdown-end"  >
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{product.producto.length}</span>
                            </div>
                        </label>
                        {/* DROPDOWN CART */}
                        {product.producto.map(products => (
                            <div key={products.id} tabIndex={0} className="mt-3 text-light card card-compact dropdown-content w-72 tablet:w-96 desktop:w-96 bg-dark shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{product.producto.length} Items</span>
                                    <p className='font-bold text-base text-light'>{products.title}</p>
                                    <img className='h-24 w-24' src={products.img} alt="" />
                                    <p className='font-bold text-base text-light'>{products.desciption}</p>
                                    <div className="divider h-1 bg-obscure"></div>
                                    <span className="text-info">Subtotal:{total}</span>
                                    <div className="card-actions">
                                        <button onClick={() => { navigate('/cart') }} className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div >
                    {/* DropDow profile */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
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

            </div>
        </div>
    )
}

export default NaBar