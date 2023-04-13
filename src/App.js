import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar/>
    <News country='in' size='9'/>
    </>
  );
}

export default App;
