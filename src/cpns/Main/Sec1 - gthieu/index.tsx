"use client"
import { Dancing_Script, Lemonada } from "next/font/google"
import { StaticImageData } from "next/image"
import styles from "./Main.module.scss"

const dancingScript = Dancing_Script({ subsets: ["latin"] })
const lemonada = Lemonada({ subsets: ["latin"] })
import { Bride, Groom } from "@/data/Person"
import PersonCpn from "./Person/Person"
import codau from "./codau.jpg"
import chure from "./chure.jpg"
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"
import { useEffect, useRef } from "react"

export default function Sec1() {
  const riseArr = useRef<Array<HTMLDivElement>>([])
  const appearArr = useRef<Array<HTMLDivElement>>([])
  useEffect(() => {
    riseArr.current.forEach(rise)
    appearArr.current.forEach(appear)
  }, [])
  return (
    <div className={styles.wrapper}>
      <h1
        className={dancingScript.className}
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        Wedding
      </h1>
      <div
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        <span className={lemonada.className}>
          With the grace and blessing of Allah SWT, the honor of your presence
          is requested at the marriage of :
        </span>
      </div>
      <div className={styles.gthieu}>
        <PersonCpn person={Bride} img={codau} />
        <h2 className={dancingScript.className}>&</h2>
        <PersonCpn person={Groom} img={chure} />
      </div>
    </div>
  )
}
