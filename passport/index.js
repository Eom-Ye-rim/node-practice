const passport=require('passport');

const local=require('./localStrategy');
const User=require('../models/user');

module.exports=()=>{
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });

    passport.deserializeUser((id,done)=>{ //정확히 의미하는 바가 무엇인지 확인
        User.findOne({where:{id}})
        .then(user=>done(null,user))
        .catch(err=>done(err));
    });

    local();
};