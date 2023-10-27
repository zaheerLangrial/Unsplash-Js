import './App.css'
import Home from './Page/Home'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import MyCollection from './Page/MyCollection'
import PrevirewCat from './Page/PrevirewCat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/mycollection' element={<MyCollection/>}/>
      <Route  path='/preview/:id' element={<PrevirewCat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
