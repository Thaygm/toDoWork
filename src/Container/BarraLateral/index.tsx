import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard criterio="status" legenda="pendentes" contador={1} />
          <FiltroCard criterio="status" legenda="concluídas" contador={2} />
          <FiltroCard criterio="prioridade" legenda="urgentes" contador={3} />
          <FiltroCard
            criterio="prioridade"
            legenda="importantes"
            contador={4}
          />
          <FiltroCard criterio="prioridade" legenda="normal" contador={5} />
          <FiltroCard criterio="todas" legenda="todas" contador={10} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
