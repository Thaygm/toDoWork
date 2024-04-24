import { UseDispatch } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

export type FiltroProps = {
  ativo?: boolean
  contador?: number
  legenda?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({
  ativo,
  contador,
  legenda,
  criterio,
  valor
}: FiltroProps) => {
  const dispatch = UseDispatch()

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
