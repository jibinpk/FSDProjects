import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Apiadd from './components/Apiadd';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Login/>}/>
        <Route path='/' element={<Apiadd/>}/>
        
        
      </Routes>
          
    </div>
  );
}

export default App;

