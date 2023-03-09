import mongoose from 'mongoose';

const Post = mongoose.Schema({
  title: String,
  message: String,
});

export default mongoose.model('Post', Post);
