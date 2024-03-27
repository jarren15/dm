import React from "react";
import Email from "../../emails";
import { Resend } from "resend";

const SSR = () => {
  return <div>ssr</div>;
};

export async function getServerData() {
//   console.log(process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "johnarren15novilla@gmail.com",
    subject: "hello world from client",
    react: <Email />,
  });

  console.log('hello', data)

  return data
}

export default SSR;
