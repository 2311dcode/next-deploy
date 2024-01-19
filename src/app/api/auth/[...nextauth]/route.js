//서버에서 모델데이터 생성을 api라우터에서 처리시에는 해당 api 라우트에서 get,post요청에 대한 session응답 처리하는 게 맞지만
//현제 프로젝트 구조에서는 모든 서버 데이터를 api라우터가 아닌 lib안쪽에 server action.js에서 처리하고 있기 때문에
//프로젝트의 효율적인 관리를 위해 lib 폴더 안쪽에 auth.js에서 get, post요청에 대한
// 서버응답함수를 만들어서 export한 내용을 /api라우터에서 import하자마자 바로 export처리

import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

export const authOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log('this user is=', user);
          return user;
        } catch (err) {
          console.log('Error =', err);
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };