"use client"
import { Lemonada } from "next/font/google"
import { useState, useEffect, useRef } from "react"
const lemonada = Lemonada({ subsets: ["latin"] })

import styles from "./Landing.module.scss"
import { Bride, Groom } from "@/data/Person"
import Main from "../Main"
import bgImgs from "./picture"

export default function Landing() {
  const [bgImg, setBgImg] = useState<number>(0)
  const [hide, setHide] = useState<boolean>(false)

  const changeBg = () => {
    if (bgImg == bgImgs.length - 1) {
      setBgImg(0)
      return
    }
    setBgImg(bgImg + 1)
  }
  useEffect(() => {
    const setBg = setTimeout(() => {
      changeBg()
    }, 9550)
    return () => {
      clearTimeout(setBg)
    }
  }, [bgImg])

  return (
    <>
      <div className={styles.wrapper + " " + (hide ? styles.hide : "")}>
        <div
          className={styles.slideWrapper}
          style={{
            backgroundImage: `url("${bgImgs[bgImg].src}")`,
            animationDuration: "10s",
          }}
        ></div>
        <div className={styles.content}>
          <h1 className={lemonada.className}>
            {Groom.name.toUpperCase() + " & " + Bride.name.toUpperCase()}
          </h1>
          <button
            onClick={() => {
              setHide(true)
            }}
            className={lemonada.className}
          >
            Mở
          </button>
        </div>
      </div>
      {hide && <Main />}
      {/* <Main /> */}
    </>
  )
}
