import { useEffect, useState } from "react";

import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteProduct } from '../feature/product/productSlice';

import CheckoutForm from "../components/CheckoutForm";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const product = useSelector(state => state.products.producto);
  const total = useSelector(state => state.products.total);
  const navegate = useNavigate();
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
    axios.post('http://localhost:5252/create-payment-intent', //clave privada mando por metodo post 
      { amount: total },
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => {
        const clientSecret = res.data.clientSecret;
        // console.log(clientSecret);
        setClientSecret(clientSecret);
      })
      .catch(error => { console.error(error) });


    axios.get('http://localhost:5252/config', //clave publica obtengo por metodo get
    {
      headers: { 'Content-Type': 'application/json' }
    })
      .then( res => {
        const publishableKey = res.data.publishableKey;
        // console.log(publishableKey)
        setStripePromise(loadStripe(publishableKey));
      })
      .catch(error => { console.error(error) });
  }, []);



  return (
    <>
      <NavBar />
      <div className="min-h-screen  bg-grayx flex flex-wrap-reverse desktop:grid  desktop:grid-cols-2">
        <div className="card w-11/12 desktop:w-full h-4/6 p-10 m-5 bg-second shadow-xl text-light">
          <h2 className="text-2xl text-obscure font-bold tracking-tight p-5">Completa el formulario con los datos de tu tarjeta para completar el pago</h2>
          <hr />
          {clientSecret && stripePromise && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
        <div className="desktop:w-9/12 m-5">
          {product.map(product => (
            <div key={product.id}>
              <div className="card card-compact my-5  text-light card-side bg-obscure shadow-xl">
                <figure><img className='w-56 phone:w-20 phone:m-5' src={product.img} alt="Movie" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.desciption}.</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(product.id)} className="btn btn-error phone:btn-xs">DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Payment;
