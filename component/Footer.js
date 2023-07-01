import style from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id={style.footer}>
      <Link href="/">
        <button className={style.btn}>Home</button>
      </Link>
      <Link href="/list">
        <button className={style.btn}>List</button>
      </Link>
      <Link href="/cart">
        <button className={style.btn}>Cart</button>
      </Link>
    </footer>
  );
}
