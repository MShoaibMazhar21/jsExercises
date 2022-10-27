let current_users = ["ahsan", "Hamza", "awais", "zulqarnain", "zain"];
let new_users = ["shahzain", "hamza", "noman", "zulqarnain", "daniyal"];

new_users.map((el) => {
  let isuserExist = current_users.includes(el);
  if (isuserExist) {
    console.log("the person will need to enter a new username.", el);
  } else {
    console.log("the username is available.", el);
  }
});
