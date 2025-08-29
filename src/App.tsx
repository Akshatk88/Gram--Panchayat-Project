import Home from './Components/home'
import Navbar from './Components/navbar'
import About from './Components/about'
import Gallery  from './Components/gallery'
import NewsSection from './Components/news'
import PanchayatMembers from './Components/member'
import Footer from './Components/footer'
import ContactUs from './Components/contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <NewsSection />
      <PanchayatMembers />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
