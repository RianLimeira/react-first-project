import { useEffect, useState } from "react"

const tarefas = [
    { id: '1', title: 'minha 1 tarefa' },
    { id: '2', title: 'minha 2 tarefa' },
    { id: '3', title: 'minha 3 tarefa' },
    { id: '4', title: 'minha 4 tarefa' },
]

export default function MyApi() {


    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function buscaDados() {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultFinish = await result.json()
            return resultFinish
        }

        buscaDados().then(res => setTarefas(res))
    }, [])

    return (<div>
        <ol>
            {tarefas.map((tarefa) => {
                return (
                    <div>
                        <li key={tarefa.id
                        }>{tarefa.title}
                            {tarefa.completed ? <span style={{color: "green"}}> - Tarefa terminada</span> : null}</li>
                    </div>
                )
            })}
        </ol>
    </div>
    )
}