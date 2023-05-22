import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/auth/context'

export function LoginPage() {
  const authContext = React.useContext(AuthContext)
  const navigate = useNavigate()
  
  function handleLogin() {
    authContext.login()
    navigate('/configs')
  }

  return (
    <div className={'loginPage'}>
      <h4>Login</h4>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}