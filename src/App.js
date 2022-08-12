import './App.css';
import Login from './Register/Login';
import { Routes, Route } from 'react-router-dom'
import SignUp from './Register/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  );
}

export default App;
