import "./App.css";
import Payment from "./screens/Payment";
import Home from './screens/Home'
import Cart from './screens/Cart'
import LogIn from './screens/LogIn'
import SignIn from './screens/SignIn'
import Principal from './screens/Principal';
import Profile from './screens/Profile';
import Proximamente from './screens/Proximamente';
import ThanksU from './screens/ThanksU';

import { ProtectedRoute } from "./security/ProtectedRoute";

import { useSelector } from 'react-redux';
import { selectUser } from "./feature/user/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Principal />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route element={<ProtectedRoute user={user} />} >
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/proximamente" element={<Proximamente />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/ThanksU" element={<ThanksU />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
