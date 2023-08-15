import React, { CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ScrollTopContextProvider } from "./contexts";
import { Link, ScrollPoint } from "./components";
import { useScrollTop } from "./hooks";

const getStyles = (): CSSProperties =>  ({
    width: "100vw",
    height: "100vh",
    background: ["blue", "red", "green"][Math.floor(Math.random() * ["blue", "red", "green"].length)]
});

function Component () {
  const {scroll} = useScrollTop("section-1", {offsetY: 100, behavior: "smooth"})
  return <div>
    <button onClick={scroll}>Scroll</button>
  </div>
}

function App() {

  return (
    <ScrollTopContextProvider>
      <div className="App">
        <header className="App-header">
          <Link elementTag="section-1">Section A</Link>
          <Link elementTag="section-2">Section B</Link>
          <Link elementTag="section-3">Section C</Link>
          <Component />
        </header>

        <main>
          <ScrollPoint tag="section-1" style={getStyles()}>
            <h1>Section1</h1>
          </ScrollPoint>
          <ScrollPoint tag="section-2" style={getStyles()}>
            <h1>Section2</h1>
          </ScrollPoint>
          <ScrollPoint tag="section-3" style={getStyles()}>
            <h1>Section3</h1>
          </ScrollPoint>

        </main>
      </div>
    </ScrollTopContextProvider>
  );
}

export default App;
