module.exports = (app) => {
    app.get("/waitingroom/api/waitingroom", (req, res) => {
      res.status(204)
      .end();
    });
  };