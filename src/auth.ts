import NextAuth from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "next-auth/providers/github";

const GITHUB_CLIENT = process.env.GITHUB_CLIENT_ID;
const GITHUB_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT || !GITHUB_SECRET) {
  throw new Error("Github credentials missing");
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
