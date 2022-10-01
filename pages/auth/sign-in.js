import React from "react";
import SignIn from "../../components/auth/Sign-in";
import { hasCookie } from "cookies-next";

function SignInPage() {
  return <SignIn></SignIn>;
}

export async function getServerSideProps({ req, res }) {
  if (hasCookie("token", { req, res })) {
    return {
      redirect: { destination: "/profile", permanent: false },
    };
  } else {
    return {
      props: {},
    };
  }
}

export default SignInPage;
