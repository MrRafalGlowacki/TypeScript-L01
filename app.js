// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "Rafał",
    age: 38,
    hobbies: ["cocking", "earning", "spending"],
    role: [2, "student"]
};
person.role.push("oh");
var favoritActivity;
favoritActivity = ["cocking"];
console.log(person.name);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
