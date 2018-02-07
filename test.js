var CryptoJS = require("crypto-js");

var calculateHash = (index, previousHash, timestamp, data) => {
  return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};

console.log(calculateHash(1,"816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7", 1518016049, "1234"));
