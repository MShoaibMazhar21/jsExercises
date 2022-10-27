const make_shirt = (size = "large", message = "I love JavaScript") => {
  console.log(
    `The shirt have ${size} size, and my text to write on it that is '${message}'`
  );
};

make_shirt();
make_shirt("medium");
make_shirt("medium", "I love TypeScript");
