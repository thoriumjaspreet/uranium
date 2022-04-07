const express = require('express');
const formatter=require('../validator/formatter')
const util= require("../util/helper");
const logger = require("../logger/logger")
const lodash = require("lodash");
const router = express.Router();




router.get('/test-me3', function (req, res) {
    logger.welcome();
    util.printMyDate();
    util.printMyMonth();
    util.getBatchInformation();
formatter.myString();
formatter.changeCaseToUpper();
formatter.changeCaseToLower();
res.send('My first ever api!')
        
    });


module.exports = router;


(2)
router.get('/hello', function (req, res) {
let month= ["jan" , "feb" , "march" , "april" , "may" , "june" , "july" , "aug" , "sep" , "oct" , "nov" , "dec"]
console.log(lodash.chunk(month, 4))
let oddNum=[1,3,5,7,9,11,13,15,17,19]
let newArray = lodash.tail(oddNum);

console.log(newArray);

3.
a= [1,3,5,7,9]
b= [2,4,6,8,10]
c= [1,2,3,4,5]
d= [6,7,8,9,10]
e= [1,2,8,9,10]
console.log(lodash.union(a,b,c,d,e));

movies= [
    ["horror" ,"The Shining"],
    ["drama" , "Titanic"],
    ["thriller" , "Shutter Island"],
    ["fantasy" , "Pans Labyrinth"]]
    
    let obj = lodash.fromPairs(movies);
      
    console.log(obj)
    res.send('hello api')
})