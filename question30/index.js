const username = ["admin", "user a", "user b", "user c", "user d"];

username.map((el) => {
  console.log(
    el === "admin"
      ? "Hello admin, would you like to see a status report?"
      : `Hello ${el}, thank you for logging in again.`
  );
});
