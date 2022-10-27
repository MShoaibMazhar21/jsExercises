const make_great = (arr) => {
  arr.pop();
  return arr.map((el, ind) => {
    return `Hi ${el}, Good to have you`;
  });
};
let magicianNames = [
  "magician a",
  "magician b",
  "magician c",
  "magician d",
  "magician e",
];
console.log(make_great(magicianNames));
