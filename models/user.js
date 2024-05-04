import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  googleEmail: String
});

const User = mongoose.model('User', userSchema);

export default User;