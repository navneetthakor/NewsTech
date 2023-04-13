import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>   
    <Route  path='/' element={<News country='in' size='9'/>}/>
    <Route  path='/in' element={<News country='in' size='9'/>}/>
    <Route  path='/us' element={<News country='us' size='9'/>}/>
    <Route  path='/sa' element={<News country='sa' size='9'/>}/>
    <Route  path='/ca' element={<News country='ca' size='9'/>}/>
    <Route  path='/nz' element={<News country='nz' size='9'/>}/>
    
    </Routes>

    </>
  );
}

export default App;
