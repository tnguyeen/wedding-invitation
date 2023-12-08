"use client"
import { Dancing_Script, Lemonada } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./Imgs.module.scss"
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"

import chure from "./anh2.jpg"
import codau from "./anh3.jpg"

export default function ImgsCpn() {
  return (
    <div className={styles.wrapperImgs}>
      <div className={styles.imgsContainer}>
        <Image
          src={chure}
          alt=""
          className={styles.anh + " " + styles.namTren}
        />
        <Image
          src={codau}
          alt=""
          className={styles.anh + " " + styles.namDuoi}
        />
      </div>
    </div>
  )
}
