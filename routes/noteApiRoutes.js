const dbData = require("../db/db.json");
const shortid = require("shortid"); // to get the random and unique id


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function(req, res) {
        // set up the variable
        const dbInfo = {
            title : req.body.title,
            text : req.body.text,
            // set up id by npm package shortid
            id : shortid.generate()
        }
        dbData.push(dbInfo);

        res.status(200).json(dbInfo);
    });

    app.delete("/api/notes/:id", function(req, res) {
        const noteId = req.params.id;

        console.log(noteId);

        // loop through the db.json file
        for (let i = 0; i < dbData.length; i ++ ) {
            // if id match
            if (noteId === dbData[i].id) {
                // delete the note
                dbData.splice(i, 1);

                console.log(dbData);

                return res.status(200).json(dbData);
            }
        }

    });


}