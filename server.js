import express from 'express';
import passport from 'passport';
import session from 'express-session';
import path from 'path';
import config from './config/env.js';
import './models/auth.js'

const PORT = config.PORT;

const app = express()
app.use(express.json())
app.use(express.static(path.join('views')));

// DEFAULT RESPONSE
app.get('/', (req, res) => {
  res.sendFile('login.html')
});

app.use(session({
  secret: process.env.EXPRESS_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());

app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope:
    [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/auth/google/protected',
    failureRedirect: '/auth/google/fail'
}));

app.get('auth/google/protected', isLogged, (req, res) => {
  let name = req.user.displayName;
  res.send(`Hello ${name}`)
})

app.get('auth/google/fail', (req, res) => {
  res.send('Something Went Wrong!')
})

app.use('/auth/logout', (req, res) => {
  req.session.destroy();
  res.send(`GOOD BYE`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});