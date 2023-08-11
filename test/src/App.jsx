import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Register from './Component/Login/Register';
import Addtodo from './Component/Addtodo/Addtodo';
import Alltodo from './Component/Addtodo/Alltodo';
import SingleTodo from './Component/Addtodo/SingleTodo';
import Owntodo from './Component/Addtodo/Owntodo';
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/addtodo' element={<Addtodo/>}/>
        <Route exact path='/alltodo' element={<Alltodo/>}/>
        <Route exact path='/singletodo/:id' element={<SingleTodo/>}/>
        <Route exact path='/owntodo' element={<Owntodo/>}/>
      </Routes>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
