if (process.env.NODE_ENV === "production") {
  //return prod values
  module.exports = require("./prod");
} else {
  //Dev value
  module.exports = require("./dev");
}
