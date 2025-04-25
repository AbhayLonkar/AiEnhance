import React from 'react'
import Header from '../components/Header.jsx'
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import Steps from '../components/Steps.jsx';
import BackToTop from '../components/BackToTop.jsx';

const App = () => {


  return (
    <div className={"h-[100%] w-full font-mono bg-black"}>
      <Header />
      <Main />
      <Steps />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App
