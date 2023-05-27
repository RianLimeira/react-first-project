import { useState } from "react"


export default function MeuComponente() {
    // useState(0) = inicia no numero 0
    //setContador vai estar setando na tela
    //contador é o valor inicial
    const [contador, setContador] = useState(0)


    function aumenta() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }
    if (contador > 5) {
        return (
            <div>
                <h1>Contador grande: {contador}</h1>
                <button onClick={aumenta}>+1</button>
                <br /><br />
                <button onClick={diminuir}>-1</button>
            </div>
        )
    }

    return (
        <div>

            <h1>Meu contador: {contador} </h1>
            <button onClick={aumenta}>+1</button>
            <br /><br />
            <button onClick={diminuir}>-1</button>
        </div>
    )
}
