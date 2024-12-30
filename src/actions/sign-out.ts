"use server";

import * as actions from "@/auth";

export async function signOutGithub() {
  return actions.signOut();
}
