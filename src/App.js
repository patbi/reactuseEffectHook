import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // On Every render
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  });

  // On first Render/Mount only! - componentDidMount Alternative
  useEffect(() => {
    //
  }, []);

  // On first Render + whenever dependency changes! - componentDidUpdate Alternative
  useEffect(() => {
    console.log(`The name changed!: ${name}`);
  }, [name]);

  // Follows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      // when component unmounts, this cleanup code runs...
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="app">
      <center>
          <h1>The UseEffect Hook</h1>
          <h2>The window width is: {windowWidth}</h2>
        
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name"
          />
        </center>
    </div>
  );
}

export default App;


// const updateWindowWidth = () => {
// setWindowWidth(window.innerWidth);  
//};