export default function MyApi() {
    const tarefas = [
        { id: '1', title: 'minha 1 tarefa' },
        { id: '2', title: 'minha 2 tarefa' },
        { id: '3', title: 'minha 3 tarefa' },
        { id: '4', title: 'minha 4 tarefa' },
    ]

    return (<div>
        <ol>
        {tarefas.map((tarefa) => {
            return (
                <li key={tarefa.id
                }>{tarefa.title}</li>
            )
        })}
        </ol>
    </div>
    )
}