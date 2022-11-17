import { Navigate, Outlet } from 'react-router-dom';
import React from 'react'


export const ProtectedRoute = ({user, redirectTo = '/' }) => {
    
    if (!user) {
        return <Navigate to={redirectTo} />
    }

    return <Outlet />


}
