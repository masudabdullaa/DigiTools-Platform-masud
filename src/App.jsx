import './App.css'
import AvailableCards from './availableCards/AvailableCards'
import PriceCards from './availableCards/PriceCards'
import Banner from './banner/Banner'
import Tools from './body/Tools'
import Footer from './Footer/Footer'
import GetStarted from './getStarted/GetStarted'
import NavBar from './navbar/NavBar'
import Status from './navbar/status/Status'
import TransparentCards from './TransparentPricing/TransparentCards'
import TransparentPricing from './TransparentPricing/TransparentPricing'
import WorkFlow from './workFlow/WorkFlow'

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
        <AvailableCards></AvailableCards>
        <PriceCards></PriceCards>
        <GetStarted></GetStarted>
        <TransparentPricing></TransparentPricing>
        <TransparentCards></TransparentCards>
        <WorkFlow></WorkFlow>
        <Footer></Footer>

      </main>


    </>
  )
}

export default App
