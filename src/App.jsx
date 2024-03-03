import React from "react";
import Nav from "./Nav";
import Header from "./MainPage/Header";
import { Routes, Route } from "react-router-dom";
import History from "./HystoryPage/History";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="history" element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;