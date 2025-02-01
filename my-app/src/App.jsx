import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Code from "./Pages/Code";
import Review from "./Pages/Review";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Code />} />
          <Route path="/results" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
