// EXAMPLE 1 - Get an Object's Key by its Value in JavaScript

function getObjectKey(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
}

const obj = {
  employee1: 'Alice',
  employee2: 'Bobby',
  employee3: 'Carl',
};

console.log(getObjectKey(obj, 'Alice')); // 👉️ "employee1"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Array.find() vs Array.filter()

// function getObjectKey(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }

// const obj = {
//   employee1: 'Alice',
//   employee2: 'Bobby',
//   employee3: 'Alice',
// };

// console.log(getObjectKey(obj, 'Alice')); // 👉️ employee1

// ------------------------------------------------------------------

// // EXAMPLE 3 - Getting multiple object keys that store the same value

// function getObjectKeys(obj, value) {
//   return Object.keys(obj).filter(key => obj[key] === value);
// }

// const obj = {
//   employee1: 'Alice',
//   employee2: 'Bobby',
//   employee3: 'Alice',
// };

// // 👇️ [ 'employee1', 'employee3' ]
// console.log(getObjectKeys(obj, 'Alice'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get an Object's Key by its Value using a `for...of` loop

// function getObjectKey(obj, value) {
//   for (const key of Object.keys(obj)) {
//     if (obj[key] === value) {
//       return key;
//     }
//   }
// }

// const obj = {
//   employee1: 'Alice',
//   employee2: 'Bobby',
//   employee3: 'Carl',
// };

// console.log(getObjectKey(obj, 'Alice')); // 👉️ employee1

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get all of an Object's keys that store a supplied value using `for..of`

// function getObjectKeys(obj, value) {
//   let keys = [];

//   for (const key of Object.keys(obj)) {
//     if (obj[key] === value) {
//       keys.push(key);
//     }
//   }

//   return keys;
// }

// const obj = {
//   employee1: 'Alice',
//   employee2: 'Bobby',
//   employee3: 'Alice',
// };

// // 👇️ [ 'employee1', 'employee3' ]
// console.log(getObjectKeys(obj, 'Alice'));
