// Object, Array, Tuple, Enum

//! Object
const person: {
  firstName: string;
  age: number;
} = {
  firstName: "Yash",
  age: 22,
};

console.log(person.firstName);

//! Array

const person1: {
  firstName: string;
  age: number;
  skills: string[];
} = {
  firstName: "Yash",
  age: 22,
  skills: ["Reactjs", "Nodejs"],
};

let favouriteLanguage1: string[];
favouriteLanguage1 = ["Hindi", "English"];

let favouriteLanguage: any[];
favouriteLanguage = ["Hindi", "English", 1, 2, true];

console.log(person1.skills);

// !Tuple

const person2: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string]; // tuple
} = {
  name: "yash",
  age: 14,
  skills: ["Reactjs", "Nodejs"],
  product: [10, "Macbook M2"],
};

console.log(person2.skills);

// enum

enum Role {
  ADMIN,
  AUTHOR,
  READ_USER_ONLY,
}

const person3 = {
  name: "yash",
  age: 14,
  skills: ["Reactjs", "Nodejs"],
  product: [10, "Macbook M2"],
  role: Role.ADMIN,
};

console.log(person3.skills);
