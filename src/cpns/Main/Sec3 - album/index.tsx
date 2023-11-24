"use client"
import Image, { StaticImageData } from "next/image"
import styles from "./Main.module.scss"
import {
  Dancing_Script,
  Lemonada,
  Philosopher,
  Baloo_Bhaijaan_2,
} from "next/font/google"

const dancingScript = Dancing_Script({ subsets: ["latin"] })
import { Bride, Groom } from "@/data/Person"
import Imgs from "./picture"

export default function Sec3() {
  return (
    <div style={{ width: "100vw", padding: "30px" }}>
      <h1
        className={dancingScript.className}
        style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}
      >
        Gallery Photo
      </h1>
      <h2
        className={dancingScript.className}
        style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}
      >
        A memory that we will treasure forever
      </h2>
      <div className={styles.wrapper}>
        {Imgs.map((e, i) => {
          let type = Math.random() < 0.3
          return (
            <div
              key={i}
              className={
                styles.item + " " + (type ? styles.large : styles.medium)
              }
              style={{ backgroundImage: `url("${e.src}")` }}
            >
              <div className={styles.itemDetails}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
