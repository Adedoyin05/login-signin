import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from './components/SignUp'
import { Routes, Route} from "react-router-dom";






function App() {
  return(
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="LogIn" element={<Login />} />
    <Route path="SignUp" element={<SignUp />} />
  </Routes>
  );
  
}


export default App