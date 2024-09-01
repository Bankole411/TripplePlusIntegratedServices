import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer, ScrollToTop} from "./components"
import {Homepage, Projects, About, VintageBlush, Rainbow, Error, CitrusSerenity, AzureTranquility, HarborHaven, BurstOfPeach, MadonProject, Wemabod, BrownstoneOasis, PrincipalProject, BrownProject, WhiteCastle, CitrusGrove, BurgundyElegance, Coah} from "./pages.js"

function App() {
  return (
    <BrowserRouter className="App">
      <ScrollToTop />
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
        <Route path="/projects/ptl-towers" element={<Wemabod />}></Route>
        <Route path="/projects/brownstone-oasis" element={<BrownstoneOasis />}></Route>
        <Route path="/projects/principal" element={<PrincipalProject />}></Route>
        <Route path="/projects/brown-project" element={<BrownProject />}></Route>
        <Route path="/projects/white-castle" element={<WhiteCastle />}></Route>
        <Route path="/projects/citrus-grove" element={<CitrusGrove />}></Route>
        <Route path="/projects/burgundy-elegance" element={<BurgundyElegance />}></Route>
        <Route path="/projects/coah" element={<Coah />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
