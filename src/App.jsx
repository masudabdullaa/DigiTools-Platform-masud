import './App.css'
import Banner from './banner/Banner'
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


    </>
  )
}

export default App
