const express=require("express")
const { login } = require("../controller/auth-controller")
const { singup, alluser } = require("../controller/user-controller")
const { authGaurd } = require("../middleware/auth-middleware")
const router=express.Router()

router.route("/singup").post(singup)
router.route("/").get(authGaurd,alluser)

router.route("/login").post(login)

module.exports=router