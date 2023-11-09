import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
