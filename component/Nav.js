"use client";
import style from "@/styles/Nav.module.css";
import Link from "next/link";
import Back from "./Back";

export default function Nav() {
  return (
    <nav id={style.nav}>
      <ul id={style.ul}>
        <li className={style.li}>
          <Back />
        </li>
        <li className={style.li}>
          <Link href="/">Login</Link>
        </li>
        <li className={style.li}>
          <Link href="/test">Test</Link>
        </li>
        <li className={style.li}>
          <Link href="/list">List</Link>
        </li>
        <li className={style.li}>
          <Link href="/cart">Cart</Link>
        </li>
        <li className={style.li}>
          <Link href="/chat">실시간 채팅 - nextjs</Link>
        </li>
        <li className={style.li}>
          <Link href="/chat2">실시간 채팅 - nodejs</Link>
        </li>
      </ul>
    </nav>
  );
}
