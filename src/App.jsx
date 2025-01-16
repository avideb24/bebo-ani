import About from './components/About'
import Banner from './components/Banner'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Marqee from './components/Marqee'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';

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
    </div>
  )
}

export default App
