import Tarefa from '../../components/Tarefa'
import { Titulo } from '../../components/Tarefa/styles'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Vuejs',
    descricao: 'Verificar as novas atualizações',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Fazer Imposto de Renda',
    descricao: 'dar baixa no imposto',
    prioridade: 'Urgente',
    status: 'Concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'LEGDAY',
    prioridade: 'Importante',
    status: 'Pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
