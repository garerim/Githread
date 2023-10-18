import GithubProvider from "next-auth/providers/github"
import { env } from "./env"
import { AuthOptions, getServerSession } from "next-auth"
import { prisma } from "./prisma"
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile){
        console.log(profile);
        return {
          id: profile.id.toString(),
          username: profile.login,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url
        };
      }
    }),
  ],
  callbacks:{
    session({session, user}){
      if (!session?.user) return session;
      session.user.id = user.id;
      return session;
    }
  }
}

export const getAuthSession = async () => {
  const session = getServerSession(authOptions);
  return session;
}