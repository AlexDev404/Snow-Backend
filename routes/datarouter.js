module.exports = (app) => {
  app.post("/datarouter/api/v1/public/*", (req, res) => {
    res.status(204)
    .end();
  });
};