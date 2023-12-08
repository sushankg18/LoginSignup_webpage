import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/Signup"} element={<Signup />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
