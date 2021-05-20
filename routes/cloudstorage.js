module.exports = (app) => {
    // GET /fortnite/api/cloudstorage/system
    app.get("/fortnite/api/cloudstorage/system", (req, res) => {
        const defaultGame = "../cloudstorage/DefaultGame.ini"
        const runtimeOptions = "../cloudstorage/DefaultRuntimeOptions.ini"
        const defaultEngine = "../cloudstorage/DefaultEngine.ini"
        // TODO
    })
}