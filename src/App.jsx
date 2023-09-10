import React from "react";
import Header from "./components/Header";
import StartHero from "./components/StartHero";
import Projects from "./components/Projects/List";
import Articles from "./components/Articles";
import More from "./components/More";
import { useState } from "react";

function App() {  
  return (
    <React.Fragment>
      <Header />
      <main>
        <StartHero />
        <Projects />
        <Articles />
        <More />
      </main>
    </React.Fragment>
  );
}

export default App;
