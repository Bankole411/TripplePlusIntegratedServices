import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from "./components"
import {Homepage, Projects, About, VintageBlush, Rainbow} from "./pages.js"

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects/vintage" element={<VintageBlush />}></Route>
        <Route path="/projects/rainbow" element={<Rainbow />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
