const myFriendsList = ["Rukhsar Hussain", "Wasim Risalat", "Hamza Basharat"];

myFriendsList.map((el, ind) => {
  console.log(
    `I would like to invite you ${el} at No. ${ind + 1} to dinner tonight`
  );
});
