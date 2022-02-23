const jwt=require("jsonwebtoken")


exports.authGaurd=async(req,res,next)=>{
try {
    const token= req.headers.authorization

    if(!token){
        return res.json({
            success:false,
            message:"please provide token"
        })
    }
    await jwt.verify(token,process.env.SECRETE_kEY)
    next()
} catch (error) {
    res.json({
        success:false,
        message:"invalid token"
    })
}
}