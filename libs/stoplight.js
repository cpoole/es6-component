"use strict";

class Stoplight extends HTMLElement {
  constructor(){
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        #housing {
          background-color: black;
          height: 500px;
          width: 200px;
          display: block;
        }
      </style>
      <div id='housing'>
        <div id='red'></div>
        <div id='yellow'></div>
        <div id='green'></div>
      </div>
    `;
  }
  // connectedCallback(){
  //   console.log("component connected");
  // }

  turnRed() {
    console.log("Red");
    this.shadowRoot.querySelector('#housing').style.backgroundImage = "url('../assets/Red-Ball-icon.png')";
  }

  turnYellow(){
    console.log("Yellow");
    this.shadowRoot.querySelector('#housing').style.backgroundImage = "url('../assets/Yellow-Ball-icon.png')";

  }

  turnGreen(){
    console.log("Green");
    this.shadowRoot.querySelector('#housing').style.backgroundImage = "url('../assets/Green-Ball-icon.png')";

  }
}

function sampleLog() {
  console.log("wassup");
}

customElements.define('lib-stoplight', Stoplight);

export { sampleLog, Stoplight };
