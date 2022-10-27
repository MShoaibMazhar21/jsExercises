const make_great = (arr) => {
  return arr.map((el) => {
    return {
      artistName: el,
    };
  });
};

let magicianNames = [
  "magician a",
  "magician b",
  "magician c",
  "magician d",
  "magician e",
];
const newArray = make_great(magicianNames);

const show_magicians = (magicianNames, newArray) => {
  console.log("first to show original array");
  magicianNames.map((el) => {
    console.log(el);
  });

  console.log("Second to modified array");

  newArray.map((el) => {
    console.log(`Hi ${el.artistName}, Good to have you`);
  });
};

show_magicians(magicianNames, newArray);
