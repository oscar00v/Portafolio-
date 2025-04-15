import React from 'react';
import './styles/App.scss';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
function App() {
  return (
    <BrowserRouter>

    <div className="app-container">
      <Home />
      <div className="main-content">
        {/* Aquí pondrás Resume, Portfolio, Contact o lo que sea */}
        <Navbar />
        <RoutesIndex  />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
