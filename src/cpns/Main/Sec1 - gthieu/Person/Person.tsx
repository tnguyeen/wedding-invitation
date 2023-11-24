"use client"
import { Dancing_Script } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./Person.module.scss"
const dancingScript = Dancing_Script({ subsets: ["latin"] })
import { Person } from "@/data/Person"

interface PersonProps {
  person: Person
  img: StaticImageData
}

export default function Person({ person, img }: PersonProps) {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="codau" className={styles.img} />
      <h2 className={dancingScript.className}>{person.lastName}</h2>
      <h1 className={dancingScript.className}>{person.name}</h1>
    </div>
  )
}
