module.exports = (app) => {
    app.post("/account/api/oauth/token", (req, res) => {
      var username;
      if(req.body.username) {
        username = req.body.username.split("@")[0];
      }
      else if(req.body.email) {
        username = req.body.email.split("@")[0];  
      }
      res.json({
        access_token: "SnowToken",
        account_id: username || "SnowUser",
        app: "fortnite",
        client_id: "clientid",
        client_service: "fortnite",
        device_id: "deviceid",
        displayName: username || "SnowUser",
        expires_at: "9999-12-02T01:12:00.159Z",
        expires_in: 28800,
        in_app_id: username || "SnowUser",
        internal_client: true,
        refresh_expires: 90000,
        refresh_expires_at: "9999-12-02T01:12:00.159Z",
        refresh_token: "SnowToken",
        token_type: "bearer"
      })
    app.get("/account/api/oauth/verify"), (req, res) => {
       res.status(200)
      .end();
    }
})}
