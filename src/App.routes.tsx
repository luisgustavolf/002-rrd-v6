import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/auth/context';
import { ConfigsPage } from './pages/private/configs';
import { LoginPage } from './pages/public/login';
import { LoggedEnv } from './components/loggedEnv';

const EmployeesRoutes = React.lazy(() => import('./pages/private/employees/routes'))

export function AppRoutes() {
  const authContext = React.useContext(AuthContext)

  return (
    <React.Suspense>
      <HashRouter>
        <Routes>

          <Route path='/login' element={<LoginPage />} />

          {authContext.isAuthenticated &&
            <Route path='/' element={<LoggedEnv />}>
              <Route path='configs' element={<ConfigsPage />} />
              <Route path='employees/*' element={<EmployeesRoutes />} />
              <Route path='*' element={<Navigate to={'configs'} />} />
            </Route>
          }

          <Route path='*' element={<Navigate to={'/login'} />} />
        </Routes>
      </HashRouter>
    </React.Suspense>
  );
}

