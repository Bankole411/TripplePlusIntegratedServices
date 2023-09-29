import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from "./components"
import {Homepage, Projects, About, VintageBlush, Rainbow, Error, CitrusSerenity, AzureTranquility, HarborHaven, BurstOfPeach, MadonProject} from "./pages.js"

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
        <Route path="/projects/citrus-serenity" element={<CitrusSerenity />}></Route>
        <Route path="/projects/azure-tranquility" element={<AzureTranquility />}></Route>
        <Route path="/projects/harbor-haven" element={<HarborHaven />}></Route>
        <Route path="/projects/burst-of-peach" element={<BurstOfPeach />}></Route>
        <Route path="/projects/madon-project" element={<MadonProject />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
