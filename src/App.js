import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
    return <>
                <Nav />
                <h1>First React App</h1>
                <p>ehhhhhhhhh</p>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </>
}

export default App