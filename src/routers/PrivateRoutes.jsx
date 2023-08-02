import { useContext } from 'react';
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Navbar } from "../components/ui/nav/NavBar";
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoutes = () => {

  const { user:{ logged } } = useContext( AuthContext );

  return (
    logged ?
      <>
        <Navbar />
        <Outlet />
      </>
    : <Navigate to={'/login'} />
  )
}
