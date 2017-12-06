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

const starWars = {
  name: 'Luke',
  jobTitle: 'Jedi'
};

const starWars2 = {
  name: 'Han Solo',
  jobTitle: 'Legendary Smuggler'
};

const starWars3 = {
  name: 'Leia',
  jobTitle: 'Resistance Leader'
};

const starWars4 = {
  name: 'Chewie',
  jobTitle: 'Best 2nd Mate'
};

function storeTheChars() {
  let mainCast = [];
  mainCast.push(starWars, starWars2, starWars3, starWars4);
  console.log(mainCast.map(char => `${char.name}: ${char.jobTitle}`));
}

storeTheChars();

//Properties that aren't there



