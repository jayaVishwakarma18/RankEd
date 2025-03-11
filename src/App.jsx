import { Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=''>
        <Navbar/>
        <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      
    </div>
  )
}

export default App
