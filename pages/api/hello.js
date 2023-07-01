// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 서버 기능을 담당하는 파일
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
