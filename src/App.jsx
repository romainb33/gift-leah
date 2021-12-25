import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isHome, setHome] = useState(true);
  const [isStep1, setStep1] = useState(false);
  const [isSolution, setSolution] = useState(false);

  const result = ['JOKER', 'JOKER CONCERT', 'JOKER THE MOVIE', 'JOKER CINE CONCERT', 'JOKER CINE-CONCERT']

  const handleOnClick = () => {
    setHome(false);
    setStep1(true);
  };

  const handleSubmit = (name, setName) => {
    if (!result.includes(name.toUpperCase())) {
      setName("");
    } else {
      setStep1(false);
      setSolution(true);
    }
  };

  return (
    <div className="App">
      {isHome && <Home handleOnClick={handleOnClick} />}
      {isStep1 && <Step1 handleSubmit={handleSubmit} />}
      {isSolution && <Solution />}
    </div>
  );
};

export default App;

const Home = ({ handleOnClick }) => {
  return (
    <div className="App-header">
      <div>
        <iframe
          src="https://giphy.com/embed/giKdkKxdDWecg524cE"
          width="200px"
          frameBorder="0"
        ></iframe>
      </div>
      <h1>It's time to discover your fantastic gift</h1>

      <button onClick={() => handleOnClick()}>DISCOVER</button>
    </div>
  );
};

const Step1 = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  console.log(name, "name");

  return (
    <div className="App-header">
      <h3>FIND THE EVENT NAME</h3>
      <img
        width="250px"
        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F016%2F669%2Fjoe.jpg"
      />
      <span>+</span>
      <img
        width="250px"
        src="https://www.alibabuy.com/photos/library/1500/10797.jpg"
      />
      <span>+</span>
      <img
        width="250px"
        src="https://offloadmedia.feverup.com/nicesecret.co/wp-content/uploads/2021/05/12045732/gladiator-aix_2_1200-1024x683-1-1024x683.png"
      />

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" onClick={() => handleSubmit(name, setName)}>
          OK
        </button>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div className="App-header">
      <h1>GOOD JOB</h1>
      <div >
        <iframe
          src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5"
          width="350px"
          frameBorder="0"
        ></iframe>
      </div>
      <div style={{overflow:'hidden'}}>
      <h5>Rendez-vous Vendredi 11 Mars à 20h00</h5>
      <img src='https://static1.laseinemusicale.com/events/1/83/1/@/affiche-joker-live-concert-la-seine-musicale-event_main-1.png' width='350px' style={{borderRadius: '20px', position: 'relative', bottom: '-10px'}} />
      </div>
    </div>
  );
};
