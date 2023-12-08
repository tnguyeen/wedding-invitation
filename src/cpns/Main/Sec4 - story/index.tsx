"use client"
import { Dancing_Script, Lemonada } from "next/font/google"
import { StaticImageData } from "next/image"
import styles from "./Main.module.scss"

const dancingScript = Dancing_Script({ subsets: ["latin"] })
const lemonada = Lemonada({ subsets: ["latin"] })

import { Bride, Groom } from "@/data/Person"
import codau from "./codau.jpg"
import chure from "./chure.jpg"
import { Cart, Story } from "./Cart"
import ImgsCpn from "./Imgs"
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"
import { useEffect, useRef } from "react"

const a: Story = {
  heading: "Menjalin Hubungan",
  main: "Your blessing of coming to our wedding is enough for us. But if you want to give a gift, we provide Digital Envelopes to make it easier for you. Thank you",
}

export default function Sec1() {
  const riseArr = useRef<Array<HTMLDivElement>>([])
  const appearArr = useRef<Array<HTMLDivElement>>([])
  useEffect(() => {
    riseArr.current.forEach(rise)
    appearArr.current.forEach(appear)
  }, [])
  return (
    <div className={styles.wrapper}>
      <div
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        <span className={lemonada.className}>The Story of</span>
      </div>
      <h1
        className={dancingScript.className}
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        Our Journey
      </h1>

      <div className={styles.main}>
        <ImgsCpn />
        <div className={styles.stories}>
          <Cart story={a} index={1} />
          <Cart story={a} index={2} />
          <Cart story={a} index={3} />
          <Cart story={a} index={4} />
        </div>
      </div>
    </div>
  )
}
