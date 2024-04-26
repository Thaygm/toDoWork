import BarraLateral from '../../Container/BarraLateral'
import ListaDeTarefas from '../../Container/ListaTarefas'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
