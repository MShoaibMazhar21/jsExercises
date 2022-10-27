const show_magicians = (arr) => {
  arr.map((el, ind) => {
    console.log(`${el} Magician calls number on ${ind + 1}`);
  });
};
let magicianNames = [
  "magician a",
  "magician b",
  "magician c",
  "magician d",
  "magician e",
];
show_magicians(magicianNames);
