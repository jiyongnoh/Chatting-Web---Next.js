import { useRouter } from "next/router";

export default function Back() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      Back
    </button>
  );
}
