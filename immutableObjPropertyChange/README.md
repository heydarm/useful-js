#Example of use

```javascript
const obj = {
  name: "John",
  pets: {
    pet1: {
      name: "Pet 1",
      skills: {
        skill1: { name: "Pet 1 jump skill" },
        skill2: { name: "Pet 1 run skill" },
      },
    },
    pet2: {
      name: "Pet2",
      skills: {
        skill1: { name: "Pet 2 jump skill" },
        skill2: { name: "Pet 2 run skill" },
      },
    },
  },
};

const changedObj = immutableObjPropertyChange(obj, ["pets", "pet1", "name"], "Changed Pet 1");

console.log("changedObj", changedObj);
// {
//   name: "John",
//   pets: {
//     pet1: {
//       name: "Changed Pet 1",
//       skills: {
//         skill1: { name: "Pet 1 jump skill" },
//         skill2: { name: "Pet 1 run skill" },
//       },
//     },
//     pet2: {
//       name: "Pet2",
//       skills: {
//         skill1: { name: "Pet 2 jump skill" },
//         skill2: { name: "Pet 2 run skill" },
//       },
//     },
//   },
// };
```
