import passport from "passport";
import User from "../models/User";
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
var opts :any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, async function(jwt_payload: any, done: any) {
    console.log(jwt_payload);
    try{
        const user= await User.findOne({
            email: jwt_payload.data.email
        });
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    }catch(err){
        return done(err, false);
    }

}));