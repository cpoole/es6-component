"use strict";

import { Stoplight } from './node_modules/lib-stoplight/dist/stoplight.js'

var mystoplight = document.querySelector('lib-stoplight');

var i = 0;
setInterval(function () {
  switch( i % 3){
    case 0:
      mystoplight.turnRed();
      i = 0;
      break;
    case 1:
      mystoplight.turnYellow();
      break;
    case 2:
      mystoplight.turnGreen();
      break;
  }
  i++;
}, 2000);

