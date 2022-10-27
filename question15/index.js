const myFriendsList = ["Rukhsar Hussain", "Wasim Risalat", "Hamza Basharat"];
const userWhoNotCome = "Hamza Basharat";
const userWhoCome = "Zulqar Nain Awais";
myFriendsList.map((el) => {
  console.log(`I would like to invite you ${el} to the dinner tonight`);
});

const filteredResult = myFriendsList.filter((el) => el === userWhoNotCome)[0];

console.log(
  `\nMy friend ${filteredResult} didn't coming due to some piece of work.\n`
);

const filteredIndex = myFriendsList.findIndex((el) => el === userWhoNotCome);
myFriendsList[filteredIndex] = userWhoCome;
myFriendsList.map((el) => {
  console.log(`I would like to invite you ${el} to dinner tonight`);
});
