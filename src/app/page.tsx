import { Button } from "@nextui-org/button";
import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signInGithub}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOutGithub}>
        <Button type="submit">Sign Out</Button>
      </form>
      <div>{session?.user ? <div>Signed In</div> : <div>Signed Out</div>}</div>
    </div>
  );
}
