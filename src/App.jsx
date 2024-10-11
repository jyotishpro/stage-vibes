import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Nav';
import Home from './Pages/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import Performance from './Component/Performance';
import ParticipateForm from './Component/ParticipateForm';
import Rating from './Pages/Rating';
import About from './Component/About';
import SeatBooking from './Component/SeatBook';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          
            
            
            <Route path="/performance" element={<Performance />} />
            
            
            <Route path="/performance/participate" element={<ParticipateForm />} />
            
            <Route path="/events" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About></About>} />
            <Route path="/book-your-seat" element={<SeatBooking></SeatBooking>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
