let printDate= function(){
    let date = new Date()
    console.log(date.toDateString());
}
let printMonth= function(){
    let date = new Date();
    console.log(`Current Date ${date.getDate()}`);

}
let  getBatchInfo=function(){
    console.log('Uranium, W3D1, the topic for today is Nodejs module system')

}

module.exports.printMyDate=printDate
module.exports.printMyMonth=printMonth
module.exports.getBatchInformation=getBatchInfo