const express = require('express');
const logo = require('./assets/js/logo');
const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

const connection = require('./database/database');
const perguntaModel = require('./database/models/Comentario')

connection.authenticate().then(() =>{
    console.log("Conexão realizada com sucesso")
}).catch(() => {
    console.log("Não deu certo!!")
})

app.use(express.static('assets'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

var port = 8080;

app.get("/", (req, res) =>{
    res.render("index");
});

app.get("/comunidade", (req, res) =>{
    res.render("community");
});

app.post("/save-community", (req, res) => {

    var name = req.body.name;
    var subject = req.body.subject;
    var message = req.body.message;

    res.send("formulario recebido" + name + " - " + subject + " : " + message);
});


app.listen(port, () => {

    console.log("Sua aplicação foi iniciada com sucesso!");
    console.log("");
    console.log("Acesse em: http://localhost:" + port + "/");
    console.log("");

});