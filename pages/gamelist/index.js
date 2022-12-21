import React, { useEffect } from "react";
import Link from "next/link";
import style from "../../styles/gamelist.module.css";
import list from "../../src/component/gamelist";

export default function GameList() {
  useEffect(() => {
    document.body.classList.add(style.list);

    return function cleanup() {
      document.body.classList.remove(style.list);
    };
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.game}>
          <Link href="/game" style={{ textDecoration: "none", color: "black" }}>
            <img src={list[0].imgURL}></img>
            <h4>{list[0].name}</h4>
          </Link>
          <p>{list[0].detail}</p>
        </div>
        <div className={style.game}>
          <Link
            href="https://2048rjs.vercel.app/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={list[1].imgURL}></img>
            <h4>{list[1].name}</h4>
          </Link>
          <p>{list[1].detail}</p>
        </div>
        <div className={style.game}>
          <img src={list[2].imgURL}></img>
          <h4>{list[2].name}</h4>
          <p>{list[2].detail}</p>
        </div>
        <div className={style.game}>
          <Link
            href="https://monsterslayers.netlify.app/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={list[3].imgURL}></img>
            <h4>{list[3].name}</h4>
          </Link>
          <p>{list[3].detail}</p>
        </div>
      </div>
    </>
  );
}
