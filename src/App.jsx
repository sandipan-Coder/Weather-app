import Search from './Components/Search'
import Details from './Components/Details'
import {  Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={ <Search /> }/>
        <Route path='/details' element={<Details />}/>

      </Routes>

    </>
        
  )
}
export default App
