import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Error404 from "./components/404/Error404";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Glavnaya from "./components/Glavnaya/Glavnaya";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import Uslugi from "./components/Uslugi/Uslugi";
import Working from "./components/Working/Working";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Glavnaya" element={<Glavnaya />} />
          <Route index="/Glavnaya" element={<Glavnaya />} />
          <Route path="/Uslugi" element={<Uslugi />} />
          <Route path="/Working" element={<Working />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
