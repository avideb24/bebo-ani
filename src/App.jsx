import About from './components/About'
import Banner from './components/Banner'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Marqee from './components/Marqee'
import Navbar from './components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import ReadyToStart from './components/ReadyToStart'
import Footer from './components/Footer'
import Loading from './components/Shared/Loading'
import { useEffect, useState } from 'react'

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
