const s = (p) => {
  let { name, age } = p;
  console.log(`${name} and he's ${age}`);
};
let person = {
  name: "ayad",
  age: 20,
};
s(person);