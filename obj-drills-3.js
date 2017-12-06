'use strict';

//Object Drills

//Object Initializers and Methods

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (loaf.water / loaf.flour) * 100;
//   },
// };

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());


// //Iterating over an object's properties

// const myObj = {
//   foo:  'bar',
//   bar:  'foo',
//   fum:  'hum',
//   quux: 'flux',
//   spam: 'ahhh'
// };

// for (let key in myObj) {
//   console.log(key, myObj[key]);
// }

// //Arrays in objects

// const hobbiton = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbiton.meals[3]);

//Arrays of objects

// const starWars = {
//   name: 'Luke',
//   jobTitle: 'Jedi'
// };

// const starWars2 = {
//   name: 'Han Solo',
//   jobTitle: 'Legendary Smuggler'
// };

// const starWars3 = {
//   name: 'Leia',
//   jobTitle: 'Resistance Leader'
// };

// const starWars4 = {
//   name: 'Chewie',
//   jobTitle: 'Best 2nd Mate'
// };

// function storeTheChars() {
//   let mainCast = [];
//   mainCast.push(starWars, starWars2, starWars3, starWars4);
//   console.log(mainCast.map(char => `${char.name}: ${char.jobTitle}`));
// }

// storeTheChars();

//Properties that aren't there


// const starWars = {
//   name: 'Luke',
//   jobTitle: 'Jedi',
// };

// const starWars2 = {
//   name: 'Han Solo',
//   jobTitle: 'Legendary Smuggler',
//   boss: 'Luke'
// };

// const starWars3 = {
//   name: 'Leia',
//   jobTitle: 'Resistance Leader',
//   boss: 'Luke',
// };

// const starWars4 = {
//   name: 'Chewie',
//   jobTitle: 'Best 2nd Mate',
//   boss: 'Han Solo'
// };

// function storeTheChars() {
//   let mainCast = [];
//   mainCast.push(starWars, starWars2, starWars3, starWars4);
//   // let key = 'boss';
//   // if (mainCast.filter(check => key in check)) {
//   console.log(mainCast.map(char => {
//     if (char.boss === undefined) {
//       return `${char.jobTitle} ${char.name} doesn't report to anybody`;
//     }
//     else {
//       return `${char.jobTitle} ${char.name} reports to ${char.boss}`;
//     }
//   }));
// }

// storeTheChars();

// Cracking the Code

// console.log(decode('craft block argon meter bells brown croon droop'));

//Object cipher


// function decode2(enc) {
 
//   const splitString  = enc.split(' ');
//   for (let i = 0; i < splitString.length; i++){ 
//     if (splitString[i][0] === 'a'){
//       splitString[i] = splitString[i][cipher.a - 1];
//     }
//     else if (splitString[i][0] === 'b'){
//       splitString[i] = splitString[i][cipher.a];
//     }
//     else if (splitString[i][0] === 'c'){
//       splitString[i] = splitString[i][cipher.b];
//     } 
//     else if (splitString[i][0] === 'd'){
//       splitString[i] = splitString[i][cipher.c];
//     }
//     else {
//       splitString[i] = " ";
//     }
//   }
//   console.log(splitString);
//   const decodedString = splitString.join('');
//   return decodedString;
// }

// const cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5
// };

// console.log(decode2('craft block argon meter bells brown croon droop'));

//Factory Functions with LOTR

function CreateCharacter(name, nickname, race, origin, weapon, attack, defense) {

  return {
    name, nickname, race, origin, attack, defense, weapon,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin} who uses ${weapon}`;
    },
    evaluateFight: function(character) {
      if (character.attack > this.defense && this.attack > character.defense) {
        return `Your opponent takes ${this.attack - character.defense} damage and you receive ${character.attack - this.defense}`;
      }
      else if (character.defense > this.attack){
        return `Your opponent takes no damage and you receive ${character.attack - this.defense} damage`;
      }
      else {
        return `Your opponent takes ${this.attack - character.defense} damage and you receive no damage`;
      }
    },
  };
}

const gandalf = CreateCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'wizard staff', 10, 6);
const bilbo = CreateCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1);
const frodo = CreateCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2);
const aragorn = CreateCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8);
const legolas = CreateCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5);
// console.log(gandalf);
// console.log(bilbo);
// console.log(aragorn);
// console.log(gandalf.describe());
// console.log(aragorn.describe());
const characters = [
  CreateCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6),
  CreateCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1),
  CreateCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'a String and Barrow Blade', 3, 2),
  CreateCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8),
  CreateCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5),
];

characters.push(CreateCharacter('Arwen Undomiel', 'arwen', 'Half Elf', 'Rivendell', 4, 3));
// console.log(characters);

if ((characters.find(char => char.nickname === 'aragorn')));
{
  console.log(aragorn.describe());
  //This needs to be fixed to be mutable
}

const hobbitRace = characters.filter(char => char.race === 'Hobbit');
console.log(hobbitRace);

const highAttack = characters.filter(char => char.attack > 5);
console.log(highAttack);

// console.log(frodo.evaluateFight(aragorn));
