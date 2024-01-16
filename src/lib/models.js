const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
/* 
이미 있다면 왼쪽 
없다면 오른쪽 
*/
