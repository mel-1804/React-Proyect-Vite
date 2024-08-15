import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Jumbotron } from "./components/Jumbotron"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Jumbotron />
        <div className="row vh-55">
          <Card number={1}/>
          <Card number={2}/>
          <Card number={3}/>
          <Card number={4}/>
          <Card number={5}/>
          <Card number={6}/>
          <Card number={7}/>
          <Card number={8}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
