const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("./webbsidan"));
app.use(bodyParser.urlencoded({extends: false}));

let logins = [
    {username: "test", password: "password"},
    {username: "test1", password: "password1"}
]

app.get("/logins",(req,res) => {
    res.send(logins);
})

app.post("/logins",(req,res) => {
    logins.push(req.body);
    io.emit("logins",req.body);
    res.sendStatus(200);
});

io.on("connection",(socket)=>{
    console.log("En användare anslöt");
});

http.listen(3000, () => {
    console.log("servern körs, besök http://localhost:3000")
});
