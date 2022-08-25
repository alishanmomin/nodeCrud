const mongoose = require("mongoose");
const express = require("express");
const auth = require("./routes/user");
const post = require("./routes/post");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://momin123:ali123@cluster0.ipjqz.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) =>
    {
        console.log("connected");
        app.listen(process.env.PORT || 8080);
    })
    .catch((err) => console.log(err));

app.use("/user", auth);
app.use("/post", post);