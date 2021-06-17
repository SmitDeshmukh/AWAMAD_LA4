const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname + '/views'))

app.set('view engine', "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.post('/contactus', (req, res) => {
    console.log(req.body);
    res.send('Thank you for coming to the website')
})
const PORT = 3333 || process.env.PORT;
app.listen(PORT, () => console.log("Listening on 3333"));
