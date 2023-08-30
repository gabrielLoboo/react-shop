import { useNavigate, useParams } from "react-router-dom"
import { listaAparelhos } from "../../listaAparelhos"

export default function VisualizarAparelhos() {

    const lista = listaAparelhos
    const navegacao = useNavigate();
    const {id} = useParams();

    const proc = lista.filter(prod => prod.id == id)
    const aparelho = proc[0]

    const salvar = ()=>{
        alert(`Aparelho: ${aparelho.marca} visualizado com sucesso`)
        return navegacao('./aparelhos')
    }

    return (
      <main>
        <h1>Visualizando Aparelhos</h1>
        <p>Visualizando os aparelhos: {aparelho.marca} </p>
        <button onClick={salvar}>Salvar</button>
      </main>
    )
  }