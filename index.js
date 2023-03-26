const express = require('express');
const logo = require('./assets/js/logo');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('assets'));

var port = 8080;

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/comunidade", (req, res) =>{
    res.render("community");
});

app.post("/save", (req, res) =>{
    res.send("formulario recebido")
});


app.listen(port, () => {

    console.log("Sua aplicação foi iniciada com sucesso!");
    console.log("");
    console.log("Acesse em: http://localhost:" + port + "/");
    console.log("");

});