const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


function sortPeopleByAge(people) {
    let age = [];

    for (let i = 0; i < people.length; i++) {
        age.push (people[i].age);
    }

  let sortingByAge = age.sort((a,b) => a - b);
  return sortingByAge;
}

console.log(sortPeopleByAge(people))
