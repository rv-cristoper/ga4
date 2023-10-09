import PublicRoute from './route/PublicRoute';

function App() {
  // const [count, setCount] = useState(0)

  // const handleCount = () => {
  //   setCount((count) => count + 1)
  //   ReactGA.event("BUY_CRYPTO")
  //   console.log("sss")
  //   ReactGA.event("login", { method: "Google" });
  //   ReactGA.event({
  //     action: "click",
  //     category: "button",
  //     label: "count",
  //   });
  //   ReactGA.event({
  //     category: 'tu categoría',
  //     action: 'tu acción',
  //     label: 'tu etiqueta', // opcional
  //     value: 99, // opcional, debe ser un número
  //     nonInteraction: true, // opcional, verdadero/falso
  //     transport: 'xhr', // opcional, beacon/xhr/image
  //   });
  // }

  return <PublicRoute />
}

export default App
