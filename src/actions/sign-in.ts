"use server";

import * as actions from "@/auth";

export async function signInGithub() {
  return actions.signIn("github");
}
