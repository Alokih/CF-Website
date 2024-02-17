import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resources" element={<Resources />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
