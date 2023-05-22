import { AppRoutes } from './App.routes';
import { AuthProvider } from './contexts/auth/provider';

export function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

