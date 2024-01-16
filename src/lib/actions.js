import { connectDB } from './connectDB';
import { Post } from './models';

export const getPosts = async () => {
  try {
    console.log('클라이언트 요청에 의해 DB접속 시작');
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Fail to fetch All posts data!!');
  }
};
