// 백엔드 시작점

const express = require("express");
const app = express();
const port = 5001;

// Mongo DB 개설 후 Mongoose Tool 설치 및 연결
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://wolfhoon:yeong@boilerplate.jmuvc.mongodb.net/<dbname>?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("mongoDB Connected..")).catch(err => console.log(err));

app.get('/', (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));