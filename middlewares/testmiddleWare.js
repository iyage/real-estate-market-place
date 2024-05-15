const testMiddleWare = async (req, res, next) => {
  if (2 > 1) next();
  else return res.send("fail test");
};
module.exports = testMiddleWare;
