import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>   
    <Route exact path='/' element={<News country="in" size="9"/>}/>
    <Route exact path='/in' element={<News country="in" size="9"/>}/>
    <Route exact path='/us' element={<News country="us" size="9"/>}/>
    <Route exact path='/sa' element={<News country="sa" size="9"/>}/>
    <Route exact path='/ca' element={<News country="ca" size="9"/>}/>
    <Route exact path='/nz' element={<News country="nz" size="9"/>}/>
    </Routes>

    </>
  );
}

export default App;
