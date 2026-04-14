import './App.css'
import Banner from './banner/Banner'
import Tools from './body/Tools'
import NavBar from './navbar/NavBar'
import Status from './navbar/status/Status'

function App() {

  return (
    <>
      <div>
        <header>
        <nav>
          <NavBar></NavBar>
        </nav>
        <Banner></Banner>
        <Status></Status>
        </header>
      </div>
      <main>
        <Tools></Tools>
      </main>


    </>
  )
}

export default App
