"use client";
import { useRouter } from "next/router";

export default function detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h4>상품상세</h4>
      <div>Query Id: {id}</div>
    </div>
  );
}
