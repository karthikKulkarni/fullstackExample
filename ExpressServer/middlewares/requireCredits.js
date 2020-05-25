module.exports = (req, res, next) => {
  console.log("req.user.credits ", req.user.credits);
  if (req.user.credits < 1) {
    return res.status(403).send({ Error: "Not Enough Credits!!" });
  }

  next();
};
