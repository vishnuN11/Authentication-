const user=require("../model/user-model")

const bcrypt=require("bcryptjs")

const jwt=require("jsonwebtoken")


exports.login=async(req,res)=>{
try {
    let {email,password}=req.body
    let data= await user.findOne({email:email})
    // console.log(data);
    if(!data){
        return res.json({
            success:false,
            message:"invalid email"
        })
    }

    let pass= await bcrypt.compare(password,data.password)
    console.log(data.password);
    console.log(password);
    if(!pass){
        return res.json({
            success:false,
            message:"invalid password"
        })
    }

    const token= await jwt.sign({id:data._id},process.env.SECRETE_kEY)
    res.json({
        success:true,
        message:"login successs",
        token:token
    })
} catch (error) {
    res.json({
        success:false,
        message:"error"+error
    })
}
}