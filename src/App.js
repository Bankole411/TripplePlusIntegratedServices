import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from "./components"
import {Homepage, Projects, About} from "./pages.js"

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
