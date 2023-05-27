const myList = [
    {id: '1', value:'Fruta'},
    {id: '2', value:'Legumes'},
    {id: '3', value:'Carne'},
    {id: '4', value:'Doces'},
]

export default function MyList() {
    return myList.map((item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })

    return myList
}