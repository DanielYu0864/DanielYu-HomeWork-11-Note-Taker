const path = require("path");


module.exports = function(app) {

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../notes.html"));

    });

    // app.use("/static", express.static(path.join(__dirname, "public/assets")));

    // get javascript file
    app.get("/public/assets/js/note.js", function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/js/note.js"));
    });
    // git css file
    app.get("/public/assets/css/styles.css", function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/css/styles.css"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
};