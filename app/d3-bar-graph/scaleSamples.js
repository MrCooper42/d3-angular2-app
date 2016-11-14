'use strict'

// Linear Scale ---------------
const linearScale = d3.scaleLinear()
  .domain([4, 105])
  .range(0, 100);

  linearScale(5);
  //returns 0.99

  linearScale(100);
  //returns 95.05

// Quantie Scale -----------------
const quantizeScale = d3.scaleQuantize()
  .domain([0, 1])
  .range('red', 'green');

  quantizeScale(0.3);
  // returns 'red'

  quantizeScale(0.7);
  // returns 'blue'

// Ordinal Scale -----------------
const ordinalScale = d3.scaleOrdinal()
  .domain('grass', 'sky')
  .range('green', 'blue');

  ordinalScale('grass');
  // returns 'green'

  ordinalScale('sky');
  // returns 'blue'
