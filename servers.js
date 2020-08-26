const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./Develop/public/routes/noteApiRoutes")(app);
require("./Develop/public/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("PORT: " + PORT);
});