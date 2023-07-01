"use client";
import { useRouter } from "next/router";

export default function pathname() {
  const router = useRouter();
  const path = router.asPath.split("/");
  const lastPath = path[path.length - 1];

  return (
    <div>
      <h4>상품상세</h4>
      <div>Last Path Id:{lastPath}</div>
    </div>
  );
}
