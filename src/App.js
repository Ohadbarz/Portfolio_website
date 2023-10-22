import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className="App bg-indigo-300">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
