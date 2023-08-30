import { Link } from "react-router-dom"
import { listaAparelhos } from "../../listaAparelhos"


export default function index() {
  return (
    <main>
        <h1>Aparelhos</h1>
        {listaAparelhos.map(apar =>(
            <div key={apar.id}>
                <Link to={`/aparelhos/editar/${apar.id}`}>
                    Visualizar Aparelho: {apar.marca}
                </Link>
            </div>
        ))}
    </main>
  )
}
