"use client"
import {
  Dancing_Script,
  Lemonada,
  Philosopher,
  Baloo_Bhaijaan_2,
} from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./Main.module.scss"

const dancingScript = Dancing_Script({ subsets: ["latin"] })
const lemonada = Lemonada({ subsets: ["latin"] })
const balooBhaijaan2 = Baloo_Bhaijaan_2({
  subsets: ["latin"],
})
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: "400",
})

import { Bride, Groom } from "@/data/Person"
import Countdown from "./Countdown"
import rings from "./rings.png"
import cheers from "./cheers.png"
import hand from "./hand.png"

export default function Sec2() {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.countdown}
        style={
          {
            // backgroundImage: `url("${chure.src}")`,
          }
        }
      >
        <h1
          className={dancingScript.className}
          style={{ marginBottom: "30px" }}
        >
          Our Special Day
        </h1>
        <Image src={hand} alt="hand" className={styles.countdownImg} />
        <Countdown />
      </div>
      <div className={styles.timeAndPlace}>
        <h1 className={balooBhaijaan2.className}>THE WEDDING DAY</h1>
        <div className={styles.date}>
          <div className={styles.main}>
            <span className={balooBhaijaan2.className}>28 . 12 . 2023</span>
          </div>
        </div>
        <div className={styles.time}>
          <Image src={rings} alt="ring" height={100} />
          <div className={styles.main}>
            <span className={balooBhaijaan2.className}>9.00</span>
          </div>
        </div>
        <div className={styles.time}>
          <Image src={cheers} alt="ring" height={100} />
          <div className={styles.main}>
            <span className={balooBhaijaan2.className}>12.00</span>
          </div>
        </div>
        <div className={styles.place}>
          <span className={balooBhaijaan2.className + " " + styles.khachsan}>
            Khách sạn số 6
          </span>
          <span className={balooBhaijaan2.className + " " + styles.hoitruong}>
            Hội trường số 5
          </span>
          <span className={balooBhaijaan2.className + " " + styles.diachi}>
            Số 7 Đường abc Thanh phố Vinh Nghệ An
          </span>
        </div>
      </div>
    </div>
  )
}
