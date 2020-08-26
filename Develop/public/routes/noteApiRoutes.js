const dbData = require("../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function(req, res) {
        dbData.push(req.body);

        res.json(req.body);
    });


}