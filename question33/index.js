const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map((el) => {
  if (el === 1) {
    console.log("1st");
  } else if (el === 2) {
    console.log("2nd");
  } else if (el === 3) {
    console.log("3rd");
  } else if (el > 3) {
    console.log(`${el}th`);
  }
});
