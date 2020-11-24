// 백엔드 시작점

const express = require("express");
const app = express();
const port = 5001;
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

//application/x-www-form-urlencoded 을 분석해서 가져옴
app.use(bodyParser.urlencoded({extended: true}));

//application/json 을 분석해서 가져옴
app.use(bodyParser.json());

// Mongo DB 개설 후 Mongoose Tool 설치 및 연결
const mongoose = require("mongoose")
mongoose.connect(config.mongoRI,
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("mongoDB Connected..")).catch(err => console.log(err));

app.get('/', (req, res) => res.send("Hello"));

app.post("/register", (req, res) => {
    // 회원 가입 할 때 필요한 정보를 Client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body);

    //mongo DB 메서드
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err});
        return res.status(200).json({
            success: true,
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));