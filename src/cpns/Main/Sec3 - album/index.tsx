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
import { useEffect, useRef } from "react"
import { rise, appear } from "@/cpns/scrollTrigger"

export default function Sec3() {
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
    <div style={{ width: "100vw", padding: "30px" }}>
      <h1
        className={dancingScript.className}
        style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}
        ref={addtoRise}
      >
        Gallery Photo
      </h1>
      <h2
        className={dancingScript.className}
        style={{ marginBottom: "30px", width: "100%", textAlign: "center" }}
        ref={addtoRise}
      >
        A memory that we will treasure forever
      </h2>
      <div className={styles.wrapper}>
        {Imgs.map((e, i) => {
          return (
            <div
              ref={addtoAppear}
              className={styles.item + " " + styles.medium}
            >
              <div
                key={i}
                className={styles.main}
                style={{ backgroundImage: `url("${e.src}")` }}
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
