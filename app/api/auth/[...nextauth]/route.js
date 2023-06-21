import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { redirect } from "next/navigation";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      async authorize(credentials, req) {
        const { username, password } = credentials
  
        if (username == 'admin' && password == 'admin1') {
          console.log('success', { username, password })
          return { name: username, email: 'dfkj' }
        } 
        throw new Error('Invalid')
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  // pages: {
  //   signIn: '/signin'
  // }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }