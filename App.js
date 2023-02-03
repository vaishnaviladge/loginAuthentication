import logo from './logo.svg';
import './App.css';
import Login from "./login.js"
import Signup from "./signup.js"
import Home from "./home.js"
import ForgotPassword from './ForgotPassword';
import {app} from "./firebase";
import {BrowserRouter ,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgotpass" element={<ForgotPassword/>}/>
      <Route path="/" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
