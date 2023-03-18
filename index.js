const express = require('express');
const app = express();

app.get("/", (req, res) =>{
    res.send("Seja Bem vindo a nossa comunidade!")
});

app.listen(8080, ()=> {console.log("App Rodando!")})