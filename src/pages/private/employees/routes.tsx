import { Route, Routes } from 'react-router-dom';
import { EmployeePage } from './employee';
import { EmployeeSearchPage } from './search';

export default function EmployeesRoutes() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<EmployeeSearchPage />} />
        <Route path={`employee`} element={<EmployeePage />} />
        <Route path={`employee/:id`} element={<EmployeePage />} />
      </Route>
    </Routes>
  )
}