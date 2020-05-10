const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  console.log("inside prosy");
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
