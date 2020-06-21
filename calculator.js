const { request, response } = require("express");

//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//index.js
app.get("/", function (req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    //res.sendFile(__dirname)
});
app.post("/", function (req, res) {
    // console.log(req.body)
    // console.log(req.body.n1)
    // console.log(req.body.n2)
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("<h1>Result of our calculation is </h1>" + result);
});

//bmiCalculator.html
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var num1 = Number(req.body.height);
    var num2 = Number(req.body.weight);
    var n = num2 / (num1 * num1);
    var bmi = Math.round(n * 10) / 10;
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
    console.log("server 3000 has started");
});
