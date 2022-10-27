let car = "subaru";
console.log(car == "subaru" ? "I predict True." : "I predict false.");
let whether = "pleasent";
console.log(whether == "cloudy" ? "I predict True." : "I predict false.");
let myCarColor = "white";
console.log(myCarColor !== "white" ? "I predict True." : "I predict false.");

let isSirZiaTeaching = true;
console.log(isSirZiaTeaching === true ? "I predict True." : "I predict false.");

let myHairColor = "white";
console.log(myHairColor == "white" ? "I predict True." : "I predict false.");

let whetherSeason = "winter";
console.log(whetherSeason == "summer" ? "I predict True." : "I predict false.");

let myCoins = "18";
console.log(myCoins == 18 ? "I predict True." : "I predict false.");

let myFavouriteteacherName = "Zia";
console.log(
  myFavouriteteacherName.toUpperCase() === "ZIA"
    ? "I predict True."
    : "I predict false."
);

let gateColor = "white";
console.log(
  gateColor == "pink" && Number(myCoins) == 18
    ? "I predict True."
    : "I predict false."
);

let myFavouriteFlower = "rose";
console.log(
  myFavouriteFlower == "rose" || Number(myCoins) > 18
    ? "I predict True."
    : "I predict false."
);
let arr = ["Dapp"];
console.log(
  Array.isArray(arr) === true ? "I predict True." : "I predict false."
);
let myObj = {
  name: "Sir Zia",
};
console.log(
  Array.isArray(myObj) === true ? "I predict True." : "I predict false."
);
