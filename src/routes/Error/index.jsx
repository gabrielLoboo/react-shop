import { useNavigate } from "react-router-dom"

export default function Error() {

  const navegacao = useNavigate();

  const back = ()=>{
    return navegacao('/')
  }

    return (
      <main>
        <p>Error 404</p>
        <button onClick={back}>Voltar a página principal</button>
      </main>
      
    )
  }