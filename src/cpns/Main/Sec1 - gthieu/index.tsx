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

export default function Sec1() {
  return (
    <div className={styles.wrapper}>
      <h1 className={dancingScript.className}>Wedding</h1>
      <span className={lemonada.className}>
        With the grace and blessing of Allah SWT, the honor of your presence is
        requested at the marriage of :
      </span>
      <div className={styles.gthieu}>
        <PersonCpn person={Bride} img={codau} />
        <h2 className={dancingScript.className}>&</h2>
        <PersonCpn person={Groom} img={chure} />
      </div>
    </div>
  )
}
