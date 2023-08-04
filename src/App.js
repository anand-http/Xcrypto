import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Coinsdetail from "./Components/Coinsdetail";
import Coins from "./Components/Coins";
import Exchanges from "./Components/Exchanges";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<Coinsdetail />} />
        <Route path="/exchange" element={<Exchanges />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
