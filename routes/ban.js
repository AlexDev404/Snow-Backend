module.exports = (app) => {
    app.get("/socialban/api/public/v1/*", (req, res) => {
        res.status(204)
        .end();
    })
}