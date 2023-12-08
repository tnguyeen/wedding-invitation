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
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"

export default function Sec2() {
  const riseArr = useRef<Array<HTMLDivElement>>([])
  const appearArr = useRef<Array<HTMLDivElement>>([])
  useEffect(() => {
    riseArr.current.forEach(rise)
    appearArr.current.forEach(appear)
  }, [])

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
          ref={(el) => {
            el && addtoAppear(el, riseArr)
          }}
        >
          Our Special Day
        </h1>
        <div
          ref={(el) => {
            el && addtoAppear(el, riseArr)
          }}
        >
          <Image src={hand} alt="hand" className={styles.countdownImg} />
        </div>
        <Countdown />
        <h3
          className={dancingScript.className}
          style={{ marginTop: "30px" }}
          ref={(el) => {
            el && addtoAppear(el, riseArr)
          }}
        >
          Together with our parents, request the honor of your presence as we
          celebrate the love we found on :
        </h3>
      </div>
      <div className={styles.timeAndPlace}>
        <h1
          className={balooBhaijaan2.className}
          ref={(el) => {
            el && addtoAppear(el, riseArr)
          }}
        >
          THE WEDDING DAY
        </h1>
        <div className={styles.date}>
          <div
            className={styles.main}
            ref={(el) => {
              el && addtoAppear(el, riseArr)
            }}
          >
            <span className={balooBhaijaan2.className}>28 . 12 . 2023</span>
          </div>
        </div>
        <div className={styles.time}>
          <div
            ref={(el) => {
              el && addtoAppear(el, riseArr)
            }}
          >
            <Image src={rings} alt="ring" height={100} />
          </div>
          <div
            className={styles.main}
            ref={(el) => {
              el && addtoAppear(el, riseArr)
            }}
          >
            <span className={balooBhaijaan2.className}>9.00</span>
          </div>
        </div>
        <div className={styles.time}>
          <div
            ref={(el) => {
              el && addtoAppear(el, riseArr)
            }}
          >
            <Image src={cheers} alt="ring" height={100} />
          </div>
          <div
            className={styles.main}
            ref={(el) => {
              el && addtoAppear(el, riseArr)
            }}
          >
            <span className={balooBhaijaan2.className}>12.00</span>
          </div>
        </div>
        <div className={styles.place}>
          <div
            ref={(el) => {
              el && addtoAppear(el, appearArr)
            }}
          >
            <span className={balooBhaijaan2.className + " " + styles.khachsan}>
              Khách sạn số 6
            </span>
          </div>
          <div
            ref={(el) => {
              el && addtoAppear(el, appearArr)
            }}
          >
            <span className={balooBhaijaan2.className + " " + styles.hoitruong}>
              Hội trường số 5
            </span>
          </div>
          <div
            ref={(el) => {
              el && addtoAppear(el, appearArr)
            }}
          >
            <span
              className={balooBhaijaan2.className + " " + styles.diachi}
              style={{ textAlign: "center" }}
            >
              Số 7 Đường abc Thanh phố Vinh Nghệ An
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
