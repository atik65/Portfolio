import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import Contact from "./pages/contact/contact/Contact";
import About from "./pages/about/About";
import Project from "./pages/porjects/Project";
import PorjectsDetails from "./pages/projectDetalis/PorjectsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/:id" element={<PorjectsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
