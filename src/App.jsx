import {Routes, Route} from 'react-router-dom'
import Currencies from './pages/Currencies'
import Main from './pages/main'
import Price from './pages/Price'
import Nav from './components/Nav'

import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/currencies" element={< Currencies />}/>
          <Route path="/price/:symbol" element={< Price />}/>
      </Routes>

    </>
  )
}

export default App
