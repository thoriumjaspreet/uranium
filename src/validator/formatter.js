
let trim = function(){
    console.log('The result after using trim:' + '      functionup     '.trim() + '.')
    
    }

    let  changeToUpperCase = function(){
        console.log('The result after using toUpperCAse: ' ,'WeLcOmE TO function'.toUpperCase())
    
        }

        let changetoLowerCase = function(){
           
            console.log( 'The result using toLowercase:' , 'WELCOME tO FUNCTIONUP'.toLowerCase())
            }
            
    module.exports.myString=trim
    module.exports.changeCaseToUpper=changeToUpperCase
    module.exports.changeCaseToLower=changetoLowerCase
