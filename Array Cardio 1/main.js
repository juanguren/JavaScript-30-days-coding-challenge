
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

const people =[
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// + returns their full name only
let born150 = inventors.filter(index =>
    index.year <= 1599
).map(final =>{
    return final.first + " " + final.last;
});

console.log(born150);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

let inventorsFullName = inventors.map((all) =>{
    return all.first + " " + all.last;
});

console.log(inventorsFullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let sortObject = () =>{
    inventors.sort((a, b) => a.year - b.year);
    console.table(inventors);
}
sortObject();
// Alternative solution using filter:
/**
 * let find = inventors.filter(time =>{
    return yearsLived = time.passed - time.year;
});

console.log(find);
 */

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
/* The acumulator (total) just holds value, it´s the current value (inventor) the one
that must goe through the array */ 
let reduceInventor = inventors.reduce((acc, cv) =>{
    let yearsLived = cv.passed - cv.year;
    return acc + (yearsLived);
}, 0);

console.log(reduceInventor);

// 5. Sort the inventors by the greatest ammount of years lived

// first parameter must ALWAYS compare with second parameter
const yearsLivedFinal = inventors.sort((a, b) =>{ 
    let lastInventor = a.passed - a.year;
    let nextInventor = b.passed - b.year;
    
    return lastInventor > nextInventor ? -1 : 1;
})

console.table(yearsLivedFinal);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
let a = document.querySelector(".mw-category").querySelectorAll("a");

const links = Array.from(a);
let final = links.map(link => link.innerText)
                 .filter(data => data.includes("de"));
*/

// Playing with filter 
let findPeople = people.filter(item =>
    item.includes("Ben") || item.includes("Ber")
);

console.log(findPeople.sort());

// 7. sort Exercise
// Sort the people alphabetically by last name

let find = people.sort((second, first) =>{
    // Using split on an iterating parameter such as "second", generates multiple arrays populated with splitted items.
    //const parts = second.split(", ");
    const [aLastName, aFirstName] = second.split(", "); /* We destructure the resulting arrays to divide its first and second values as
    lastName and firstName  */
    const [bLastName, bFirstName] = first.split(", "); // Same here to avoid missing letting values outside.
    
    return aLastName > bLastName ? 1: -1;
});

console.log(find);


// 8. Reduce Exercise
// Sum up the instances of each of these (how much items are repeated)
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let count = 0;

let instances = data.reduce((acc, cv) =>{
    /*acc[cv] --> acc[] makes acc an empty object and cv moves through the array so it passes the array values to the acc = acc.truck | acc.walk etc..
    it´s empty so it throws an error.
    */
   if (!acc[cv]) { // FIRST STEP: Checking if acc[cv] doesn´t exists returns true
       acc[cv] = 0; // Given that the object in that "cv" position does not exist, we initialize it in 0, giving it a value and avoiding the error.
   }
   acc[cv]++; /* SECOND STEP: We initialize the acc as an object (see last line) and count each time a match is found "acc[car]"
    "acc[cv]++ would increment it by one."
    */
   return acc;
}, {}); // "We START with a blank object. acc[cv] = 0 instantiates them first in a 0 position, then after finding matches it starts counting"

console.log(instances);
