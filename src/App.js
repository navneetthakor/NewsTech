import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
    <Routes>   
    <Route exact path='/' element={<News key="hin" country="in" size="12"/>}/>
    <Route exact path='/in' element={<News key="in" country="in" size="12"/>}/>
    <Route exact path='/us' element={<News key="us" country="us" size="12"/>}/>
    <Route exact path='/sa' element={<News key="sa" country="sa" size="12"/>}/>
    <Route exact path='/ca' element={<News key="ca" country="ca" size="12"/>}/>
    <Route exact path='/nz' element={<News key="nz" country="nz" size="12"/>}/>
    </Routes>

    </>
  );
}

export default App;
