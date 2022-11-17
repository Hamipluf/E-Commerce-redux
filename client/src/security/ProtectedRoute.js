import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from "../feature/user/userSlice";


export const ProtectedRoute = ({children, redirectTo = '/' }) => {    
  const user = useSelector(selectUser);

    if (!user) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />


}
