"use client";
import style from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="container">
      <form className={style.form}>
        <div id={style.input}>
          <label for="id">ID</label>
          <input
            id="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div id={style.input}>
          <label for="pwd">Password</label>
          <input
            id="pwd"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div className={style.buttonForm}>
          <button
            className={style.button}
            onClick={() => {
              if (id && !localStorage.getItem("id")) {
                localStorage.setItem("id", id);
                alert("로그인 완료");
              }
            }}
          >
            Login
          </button>
          <button className={style.button}>회원가입</button>
        </div>
      </form>
    </div>
  );
}
