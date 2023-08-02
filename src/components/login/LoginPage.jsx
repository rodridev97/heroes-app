import { useContext } from 'react'
import { useNavigate } from "react-router-dom"

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext( AuthContext );

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload:{
        name: 'RodriDevStudio',
      }
    })

    navigate("/", { replace: true }); 
  }

  return (
    <div className="container mt-5" >
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleClick }
      >Login</button>
    </div>
  )
}
