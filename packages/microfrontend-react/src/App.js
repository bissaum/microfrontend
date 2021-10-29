import { useState } from 'react';
import "./App.css";

import angularSvg from "./assets/angular.svg";
import jquerySvg from "./assets/jquery.svg";
import jsSvg from "./assets/js.svg";
import nextJsSvg from "./assets/nextjs.svg";
import reactSvg from "./assets/react.svg";
import vueSvg from "./assets/vue.svg";

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={angularSvg} alt="Angular" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputAngular"
            className="form-control"
            aria-describedby="hintAngular"
          />
        </div>
        <div className="col-auto">
          <span id="hintAngular" className="form-text"> Angular </span>
        </div>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={jquerySvg} alt="jQuery" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputJQuery"
            className="form-control"
            aria-describedby="hintJQuery"
          />
        </div>
        <div className="col-auto">
          <span id="hintJQuery" className="form-text"> jQuery </span>
        </div>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={jsSvg} alt="javaScript" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputJS"
            className="form-control"
            aria-describedby="hintJS"
          />
        </div>
        <div className="col-auto">
          <span id="hintJS" className="form-text"> JS </span>
        </div>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={nextJsSvg} alt="NextJS" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputNextJS"
            className="form-control"
            aria-describedby="hintNextJS"
          />
        </div>
        <div className="col-auto">
          <span id="hintNextJS" className="form-text"> NextJS </span>
        </div>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={reactSvg} alt="React" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputReact"
            className="form-control"
            aria-describedby="hintReact"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <span id="hintReact" className="form-text"> {value} </span>
        </div>
      </div>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <img height="32" src={vueSvg} alt="Vue" />
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputVue"
            className="form-control"
            aria-describedby="hintVue"
          />
        </div>
        <div className="col-auto">
          <span id="hintVue" className="form-text"> Vue </span>
        </div>
      </div>
    </div>
  );
}

export default App;
