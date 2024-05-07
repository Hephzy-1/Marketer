import mongoose from 'mongoose';

// LOGIN FUNCTION
export function isLogged (req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

const userSchema = new mongoose.Schema({
  googleId: String,
  googleEmail: String
});

const User = mongoose.model('User', userSchema);

export default User;