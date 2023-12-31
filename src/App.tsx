import Home from './pages/home/Home'
import {Routes,Route} from "react-router-dom"
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'


function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </>
    </div>

  )
}

export default App
