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
    app.get("/account/api/oauth/verify", (req, res) => {
    res.json({
      access_token: req.headers.authorization,
      expires_in: 28800,
      expires_at: "9999-12-31T23:59:59.999Z",
      token_type: "bearer",
      refresh_token: "SnowToken",
      refresh_expires: 115200,
      refresh_expires_at: "9999-12-31T23:59:59.999Z",
      account_id: username || "SnowUser",
      client_id: "clientId",
      internal_client: true,
      client_service: "fortnite",
      displayName: req.h,
      app: "fortnite",
      in_app_id: username || "SnowUser",
      device_id: "deviceId",
    });
});
    }
