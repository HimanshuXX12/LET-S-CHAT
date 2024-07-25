
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginSignUp from './Pages/LoginSignUp';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App ">
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
