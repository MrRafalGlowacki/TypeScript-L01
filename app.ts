// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Rafał",
  age: 38,
  hobbies: ["cocking", "earning", "spending"],
  role: [2, "student"],
};

// person.role.push("oh");
// person.role[1] = 10;

// person.role = [1, "teacher", "knok"]

let favoritActivity: string[];
favoritActivity = ["cocking"];
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
  console.log(hobby);
}
