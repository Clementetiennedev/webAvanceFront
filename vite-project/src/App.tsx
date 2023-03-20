import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function increment(this: any){
    this.setState({compteur : this.state.compteur + 1})
}
function App(this: any) {
    const [count2, setCount2] = useState(0)
  const [count, setCount] = useState(0)
    const [ count3, setCount3] = useState(0)

    return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(((count) => count+1))}>
          Boutton 1 a pour valeur {count+count3}
        </button>
      </div>
        <div className="card">
            <button onClick={() => setCount2(((count2) => count2+1))}>
                Bouttton 2 a pour valeur {count2+count3}
            </button>
        </div>
        <div>
            <button onClick={() => setCount3((count   ) => count+1)}>
                Ajoute pour les deux
            </button>
        </div>
    </div>


  )
}

export default App
