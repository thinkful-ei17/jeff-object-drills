'use strict';

//Object Drills

//Object Initializers and Methods

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water / loaf.flour) * 100;
  },
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());


//Iterating over an object's properties

const myObj = {
  foo:  'bar',
  bar:  'foo',
  fum:  'hum',
  quux: 'flux',
  spam: 'ahhh'
};

for (let key in myObj) {
  console.log(key, myObj[key]);
}

//Arrays in objects

const hobbiton = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbiton.meals[3]);

//Arrays of objects


