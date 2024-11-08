import city from './images/city.jpg'
import Header from './components/Header'
import ContactUs from './pages/ContactUs'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  const [navbar, setnavbar] = useState('Home')
  const [search, setsearch] = useState('')
  return (
    
      <div className="w-screen h-screen flex flex-col" style={{backgroundImage:`url(${city})`, backgroundSize:"cover"}}>
       
        <Header search={search} setsearch={setsearch} navbar={navbar} setnavbar={setnavbar}/>
        {navbar === 'Home' ? <Home search={search} /> : navbar === 'About' ? <About /> : <ContactUs/>}
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80%', 
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 1), transparent)',
          zIndex: 1, 
        }}
      ></div>
      </div>
      
  )
}

export default App
