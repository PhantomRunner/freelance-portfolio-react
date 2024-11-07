import "./styles/main.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Projects/>}/>
                    <Route path="/project/:id" element={<Project/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>

        </div>
    );
}

export default App;
