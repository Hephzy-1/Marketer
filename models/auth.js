import express from 'express';
import passport from 'passport';
import Google from 'passport-google-oauth2';
import mongoose from "mongoose";
import config from "../config/env.js";

const User = mongoose.model('User')
const app = express();
var GoogleStrategy = Google.Strategy


passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:4000/auth/google/callback`, // Replace with your actual callback URL
    passReqToCallback: true // Pass the request object to the verify callback
}, (request, accessToken, refreshToken, profile, done) => {
    // Find or create a user based on the Google profile
    // You can customize this part according to your application's needs
    User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return done(err, user);
    });
}));

passport.serializeUser((user, data) => {
  data(null, user);
});

passport.deserializeUser((user, data) => {
  data(null, user);
});

// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://yourdomain:3000/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));