/*
 * Import packages
 */
const express = require('express');
let response_data = require('./response_data.json');
console.log(response_data["current"]);
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
//const io = new Server(server);

server.listen(5000, function () {
    console.log("server started at port 5000");
});

app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log(`connect ${socket.id}`);

    socket.on("disconnect", (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
    });

    socket.on("question", (data) => {
        console.log("recieved question: "+data)
        let tempdata = data
        const remove_these = /[!?.,]/g;
        tempdata = tempdata.replace(remove_these,'')
        tempdata = " "+tempdata+" ";
        let answer = String()
        for (const [keymain,valuemain] of Object.entries(response_data[response_data["current"]])){
            for (const [index,keyword] of Object.entries(valuemain["keywords"])){
                if (tempdata.includes(" "+keyword+" ")){
                    answer = valuemain["response"]
                }
            }
        }
        if (!answer){
            answer = "I didn't understand that, please rephrase your Answer.";
        }
        else{
            response_data["current"] = answer;
        }
        socket.emit("answer", answer);
    });
});
