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
import { useEffect, useRef } from "react"
import { appear, rise } from "@/cpns/scrollTrigger"

export default function Sec2() {
  const riseArr = useRef<Array<HTMLDivElement>>([])
  const appearArr = useRef<Array<HTMLDivElement>>([])
  useEffect(() => {
    riseArr.current.forEach(rise)
    appearArr.current.forEach(appear)
  }, [])
  const addtoRise = (el: HTMLDivElement) => {
    if (el && !riseArr.current.includes(el)) {
      riseArr.current.push(el)
    }
  }
  const addtoAppear = (el: HTMLDivElement) => {
    if (el && !appearArr.current.includes(el)) {
      appearArr.current.push(el)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.countdown}
        style={
          {
            // backgroundImage: `url("./chure.jpg")`,
          }
        }
      >
        <h1
          className={dancingScript.className}
          style={{ marginBottom: "30px" }}
          ref={addtoRise}
        >
          Our Special Day
        </h1>
        <div ref={addtoAppear}>
          <Image src={hand} alt="hand" className={styles.countdownImg} />
        </div>
        <Countdown />
        <h3
          className={dancingScript.className}
          style={{ marginTop: "30px" }}
          ref={addtoRise}
        >
          Together with our parents, request the honor of your presence as we
          celebrate the love we found on :
        </h3>
      </div>
      <div className={styles.timeAndPlace}>
        <h1 className={balooBhaijaan2.className} ref={addtoRise}>
          THE WEDDING DAY
        </h1>
        <div className={styles.date}>
          <div className={styles.main} ref={addtoRise}>
            <span className={balooBhaijaan2.className}>28 . 12 . 2023</span>
          </div>
        </div>
        <div className={styles.time}>
          <div ref={addtoAppear}>
            <Image src={rings} alt="ring" height={100} />
          </div>
          <div className={styles.main} ref={addtoRise}>
            <span className={balooBhaijaan2.className}>9.00</span>
          </div>
        </div>
        <div className={styles.time}>
          <div ref={addtoAppear}>
            <Image src={cheers} alt="ring" height={100} />
          </div>
          <div className={styles.main} ref={addtoRise}>
            <span className={balooBhaijaan2.className}>12.00</span>
          </div>
        </div>
        <div className={styles.place}>
          <span
            className={balooBhaijaan2.className + " " + styles.khachsan}
            ref={addtoRise}
          >
            Khách sạn số 6
          </span>
          <span
            className={balooBhaijaan2.className + " " + styles.hoitruong}
            ref={addtoRise}
          >
            Hội trường số 5
          </span>
          <span
            className={balooBhaijaan2.className + " " + styles.diachi}
            ref={addtoRise}
          >
            Số 7 Đường abc Thanh phố Vinh Nghệ An
          </span>
        </div>
      </div>
    </div>
  )
}
