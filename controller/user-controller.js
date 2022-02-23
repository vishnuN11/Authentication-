const user=require("../model/user-model")
const bcrypt=require("bcryptjs")


exports.singup=async(req,res)=>{
try {
    let {name,email,password}=req.body

    let data= await user.findOne({email:email})

    if(data){
        return res.json({
            successs:false,
            message:'email already exit'
        })
    }
    
    let salt= await bcrypt.genSalt(10)
    password= await bcrypt.hash(password,salt)
    const result= await user.create({
        name,
        email,
        password
    })

    res.json({
        success:true,
        message:"singup",
        result:result
    })
} catch (error) {
    res.json({
        success:false,
        message:"error"+error,
        
    })
}
}


exports.alluser=async(req,res)=>{
try {
    const result =await user.find()

    res.json({
        succeess:true,
        message:"all data",
        result:result

    })
} catch (error) {
    res.json({
        succeess:false,
        message:"error"+error,
        

    })
}
}