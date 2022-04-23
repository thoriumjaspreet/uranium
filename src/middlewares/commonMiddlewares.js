const validateAppType  = function (req,res,next){
    console.log(req.headers["isfreeappuser"])
    console.log(req.headers)
      console.log((req.headers.isfreeappuser) == 'false')
 
    if(req.headers["isfreeappuser"] !== null && ('true' == req.headers["isfreeappuser"] || 'false' == req.headers["isfreeappuser"]) ){
  
let isFreeAppUser = req.headers["isfreeappuser"]

if(isFreeAppUser != undefined && isFreeAppUser != ''){

     req.body.isFreeAppUser = isFreeAppUser
     console.log("controle goes to to middleware to controller");
     next()
 }else{
     res.status(426).send({msg:"request is missing a mandatory header value and value must be Boolean"})
 }

    }
}

module.exports.validateAppType = validateAppType 
// const validateAppType = function(req, res, next){
//     let appTypeHeader = (req.headers['isFreeAppUser'])
//     let isFreeAppUser
//     if(!appTypeHeader) {
//         return res.send({message: 'Mandatory header missing'})
//     }

//     if(appTypeHeader === 'false') {
//         isFreeAppUser = false
//     } else {
//         isFreeAppUser = true
//     }
//     req.isFreeAppUser = isFreeAppUser

//     next()
// }

// module.exports.validateAppType = validateAppType