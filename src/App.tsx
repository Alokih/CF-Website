import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resources" element={<Resources />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
