import {useRoutes} from "react-router-dom"
import router from "@/router/index.tsx"
function App() {
  const outlet = useRoutes(router)
  return (
      <div className="App">
         {outlet}
      </div>
  )
}

export default App
