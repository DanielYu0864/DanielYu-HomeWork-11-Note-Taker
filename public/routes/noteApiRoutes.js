const dbData = require("../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function(req, res) {
        dbData.push(req.body);

        res.json(req.body);
    });

    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id;

        console.log(noteId);

        for (let i = 0; i < dbData.length; i ++ ) {
            if (noteId === dbData[i].objectId) {

                dbData.splice(i, 1);

                console.log(dbData);

                return console.log("data has been deleted");
            }
        }

        res.json(dbData);


    });


}