import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/main';
import Gallery from './components/gallery';
import Group from './components/group';
import Weather from './components/weather';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/group" element={<Group />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;