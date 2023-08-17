import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactGA from "react-ga4";

const TRACKING_ID = 'G-Z5NJ8QL119';
ReactGA.initialize(TRACKING_ID);

function App() {
  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1)
    ReactGA.event("BUY_CRYPTO")
    // console.log("sss")
    // ReactGA.event("login", { method: "Google" });
    // ReactGA.event({
    //   action: "click",
    //   category: "button",
    //   label: "count",
    // });
    // ReactGA.event({
    //   category: 'tu categoría',
    //   action: 'tu acción',
    //   label: 'tu etiqueta', // opcional
    //   value: 99, // opcional, debe ser un número
    //   nonInteraction: true, // opcional, verdadero/falso
    //   transport: 'xhr', // opcional, beacon/xhr/image
    // });
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
