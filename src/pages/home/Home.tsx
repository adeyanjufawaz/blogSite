import Footer from "../../components/Footer.js"
import Header from "../../components/Header.js"
import About from "./About.js"
import Intro from "./Intro.js"
import Reviews from "./Reviews.js"

function Home() {

  return (
    <>
      <Header />
      <Intro/>
      <About/>
      <Reviews/>
      <Footer/>
    </>

  )
}

export default Home