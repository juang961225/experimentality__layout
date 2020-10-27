import React from "react";
import Intro from "./components/intro";
import HistoryComponent from "./components/history";
import Develepers from "./components/developers";
import Contact from "./components/contact";
import Form from "./components/form";
import FooterComponent from "./components/footer";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Intro />
      <HistoryComponent />
      <Develepers />
      <Contact />
      <Form />
      <FooterComponent />
    </div>
  );
}

export default App;
