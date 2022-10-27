const myFriendsList = ["Rukhsar Hussain", "Wasim Risalat", "Hamza Basharat"];
const myFriendsListTwo = ["Shoaib Anjum", "Abu Bakr", "Younis Malik"];
const newUser = "Zulqar Nain Awais";
myFriendsList.map((el) => {
  console.log(
    `Hi ${el}, i found bigger table and would like to invite more people`
  );
});

const newArray = [...myFriendsListTwo, ...myFriendsList];

newArray.splice(Math.floor(newArray.length / 2), 0, newUser);
newArray.map((el) => {
  console.log(`I would like to invite you ${el} to the dinner tonight`);
});
console.log(
  "I can invite only two people for dinner due to my table is not in my home"
);
console.log(newArray.pop(), "I am sorry you can’t invite them to the dinner.");
console.log(newArray.pop(), "I am sorry you can’t invite them to the dinner.");
console.log(newArray.pop(), "I am sorry you can’t invite them to the dinner.");
console.log(newArray.pop(), "I am sorry you can’t invite them to the dinner.");
console.log(
  newArray.pop(),
  "I am sorry you can’t invite them to the dinner.\n"
);
console.log(newArray.pop(), "Greetings!,you are still invited to the dinner.");
console.log(newArray.pop(), "Greetings!,you are still invited to the dinner.");

console.log("\ni have", newArray.length, "friends in the list");
