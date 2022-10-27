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
