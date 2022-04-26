let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
 let  getsession=async function(req,res) {
     try{
     let district_id=req.query.district_id
     let date= req.query.date
     console.log(`query params are: ${district_id} ${date}`)
     var options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
    }
    let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
}

        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }

    let gettemp= async function (req, res) {
        try {
            let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            cityobj=[]
            for(let i=0;i<cities.length; i++){
                let obj ={city:cities[i]}
            
            let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1d5e6b9b0fc7e8052fb436a1d28c9645 `)
            
            console.log(resp.data.main.temp)
            obj.temp=resp.data.main.temp
            cityobj.push(obj)
        }
        let sortObject=cityobj.sort(function(a,b){return a.temp-b.temp})
        console.log(sortObject)
        res.status(200).send({ status:true,data :sortObject})
    }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }


    let getAllMeme = async function (req, res) {
        try {
            
            
        
            var options = {
                method: "get",
                url: `https://api.imgflip.com/get_memes`,
           
            }
    
            let result = await axios(options)
         
            res.status(200).send({ data: result.data })
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }








let meme=async function(req,res){
    try{
    let template_id = req.query.template_id
    let text0=req.query.text0
    let text1=req.query.text1
     let options={
         method:'post',
    url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
     }
     let result =await axios(options);
    res.status(200).send({data: result.data})
   }
   catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

 //   https://i.imgflip.com/30b1gx.jpg?  

    
    
module.exports.getsession=getsession
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.gettemp = gettemp
module.exports.getAllMeme=getAllMeme 

module.exports.meme= meme