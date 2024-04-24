import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/tarefas'
import { useDispatch } from 'react-redux'
import TarefaClass from '../../models/tarefas'

type TarefaProps = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: TarefaProps) => {
  const dispatch = useDispatch()
  const [estaEditado, setEstaEditado] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditado ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditado(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditado(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
