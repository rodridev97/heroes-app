import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginPage } from '../components/login/LoginPage';

export const PublicRoutes = () => {

  const { user:{ logged } } = useContext( AuthContext );

  return (
    (!logged) ?
        <LoginPage />
    : <Navigate to={'/'} />
  )
}

