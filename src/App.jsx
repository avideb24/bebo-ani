import About from './components/About'
import Banner from './components/Banner'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Marqee from './components/Marqee'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Navbar />
      <Banner />
      <Marqee />
      <About />
      <Eyes />
      <Featured />
      <ReadyToStart />
      <Footer />
    </div>
  )
}

export default App
