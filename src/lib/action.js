import { Post } from './models';
import { connectDB } from './connectDB';

const getPosts = async () => {
  try {
    console.log('클라이언트 요청에ㅐ 의해 DB접속 시작');
    connectDB();
  } catch (err) {
    console.log(err);
    throw new Error('Fail to fetch All posts data!!');
  }
};
