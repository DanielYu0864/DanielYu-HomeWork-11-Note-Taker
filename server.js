const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static the public folder
app.use(express.static("public"));

// to get the api and html servers
require("./routes/noteApiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("PORT: " + PORT);
});