"use client"
import { Dancing_Script } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./Person.module.scss"
const dancingScript = Dancing_Script({ subsets: ["latin"] })
import { Person } from "@/data/Person"
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"
import { useEffect, useRef } from "react"

interface PersonProps {
  person: Person
  img: StaticImageData
}

export default function Person({ person, img }: PersonProps) {
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
        <Image src={img} alt="codau" className={styles.img} />
      </div>
      <h2
        className={dancingScript.className}
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        {person.lastName}
      </h2>
      <h1
        className={dancingScript.className}
        ref={(el) => {
          el && addtoAppear(el, riseArr)
        }}
      >
        {person.name}
      </h1>
    </div>
  )
}
