import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/kontakt" element={<Contact />} /> 
        <Route path="/book" element={<Booking />} /> 

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
