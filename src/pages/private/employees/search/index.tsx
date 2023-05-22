import { Link } from 'react-router-dom'

export function EmployeeSearchPage() {
  return (
    <div className={'EmployeeSearchPage'}>
      <h4>Busca de colaboradores</h4>

      <Link to={`employee`}>
        Novo colaborador
      </Link>
     
      {' '}

      <Link to={`employee/1`}>
        Ver colaborador 1
      </Link>
    </div>
  )
}