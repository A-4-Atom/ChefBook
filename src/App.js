import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tasty-tips" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
