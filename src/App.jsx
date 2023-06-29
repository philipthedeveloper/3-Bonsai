import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import HelpOffer from "./components/HelpOffer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Clients />
      <HelpOffer />
      <Footer />
    </div>
  );
};

export default App;
