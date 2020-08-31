const dbData = require("../db/db.json");
const shortid = require("shortid");


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function(req, res) {

        const dbInfo = {
            title : req.body.title,
            text : req.body.text,
            id : shortid.generate()
        }
        dbData.push(dbInfo);

        res.status(200).json(dbInfo);
    });

    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id;

        console.log(noteId);

        for (let i = 0; i < dbData.length; i ++ ) {
            if (noteId === dbData[i].id) {

                dbData.splice(i, 1);

                console.log(dbData);

                return res.status(200).json(dbData);
            }
        }

    });


}