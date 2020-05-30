let express= require("express");
let router = express.Router();
router.get("/",(req,res)=>{
    res.render('index');
})
router.get("/dich-vu-bao-ve-nick-facebook",(req,res)=>{
    res.render('./AccountSecurityService/AccountSecurityService');
})
module.exports  = router ;
