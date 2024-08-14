import {Navbar} from "./components/Navbar"
import {Card} from "./components/Card"
import {Jumbotron} from "./components/Jumbotron"
import {Footer} from "./components/Footer"

function App() {
  
  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <Footer/>
    </>
  )
}

export default App
