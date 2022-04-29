// https://courses.wesbos.com/account/access/5e4177a0d9cc836465200752/view/194130346
// https://github.com/wesbos/JavaScript30/blob/master/04%20-%20Array%20Cardio%20Day%201/index-FINISHED.html

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const greaterThan1500 = inventors.filter((inventor) => inventor.born < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort((first, second) => {
  return first.born > second.born ? 1 : -1;
});

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let counter = 0;
const totalYears1 = inventors.forEach(
  (inventor) => (counter += inventor.passed - inventor.born)
);

const totalYears2 = inventors.reduce((acc, cv) => {
  return acc + (cv.passed - cv.born);
}, 0);

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabetically = people.sort((first, second) => {
  const [last1, aFirst] = first.split(", ");
  const [last2, bFirst] = second.split(", ");

  return last1 > last2 ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;

  return obj;
}, {}); // {} sets up the object literal under [item] key name
