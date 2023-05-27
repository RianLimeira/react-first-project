import MeuComponente from './components/MyComponents'
import reactLogo from './assets/react.svg'
import MyList from './components/MyList'

function App() {

  return (
    <div>
      <h1>Hello World - First Project React</h1>
      <MyList />
      <MeuComponente />
      {/* <MyButton conteudo='+1'/> */}
      {/* <MyButton conteudo='dps aqui'/>
      <MyButton conteudo='por fim aqui'/> */}
    </div>
  )
}

// function MyButton(props){
//   return (<button>{props.conteudo}</button>)
// }
export default App
