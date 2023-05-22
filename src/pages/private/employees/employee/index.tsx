import { useParams } from 'react-router-dom'

export function EmployeePage() {
  const { id } = useParams()

  return (
    <div className={'employeePage'}>
      {id &&
        <h4>Detalhes do colaborador {id}</h4>
      }
      
      {!id &&
        <h4>Novo colaborador</h4>
      }
    </div>
  )
}