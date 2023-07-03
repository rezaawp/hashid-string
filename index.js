const { encode, decode } = require("./algorithm");

// max length string = 10
// don't use space
console.log(encode("RezaK")); // 293287562
console.log(decode("293287562")); // RezaK
