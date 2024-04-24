import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefas'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Typescript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Entregar novos Currículos',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Revisar curriculo para cada vaga',
      2
    ),
    new Tarefa(
      'Fazer exame de sangue',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Exame de sangue preventivo',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
