import * as React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/context'

export function LoggedEnv() {
  const authContext = React.useContext(AuthContext)

  return (
    <div className={'loggedEnv'}>
      <Link to={'/configs'}>Configs</Link> {' '}
      <Link to={'/employees'}>Colaboradores</Link> {' '}
      <button onClick={authContext.logout}>Logout</button>
      
      <hr />
      
      <Outlet />
    </div>
  )
}