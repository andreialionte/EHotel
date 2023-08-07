import './App.css';
import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CheckRooms from './components/CheckRooms';
import FamilyRoom from './components/HotelRooms/FamilyRoom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CheckRooms" element={<CheckRooms />} />
          <Route path="/" element={<Home />} />
          <Route path="/FamilyRoom" element={<FamilyRoom />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
