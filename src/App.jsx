import Header from "./components/header/Header"
import { Hero } from "./components/header/hero/Hero"
import { About } from "./pages/About"
import { Login } from "./pages/login/Login"
import { Pitches } from "./pages/pitches/Pitches"



function App() {


  return (
    <>
      <Header />
      <Hero />
      <About />
      <Pitches />
      <Login />
    </>
  )
}

export default App
