import { deleteCookie } from "cookies-next";

async function handler(req, res) {
  // Remove the cookie associated with the request.
  deleteCookie("token", {
    req,
    res,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  });
  return res.status(200).json({ message: "ok" });
}
export default handler;
