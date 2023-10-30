const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer=require('nodemailer')
const transporter=nodeMailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:"vimala5042@gmail.com",
        pass:"msiozzmoizamlsuk"
    },
    secure:true
})
server.listen(process.env.PORT || 3030);