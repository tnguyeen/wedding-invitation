"use client"
import { StaticImageData } from "next/image"
import styles from "./Main.module.scss"

import Sec1 from "./Sec1 - gthieu"
import Sec2 from "./Sec2 - tgian"
import Sec3 from "./Sec3 - album"
import Sec4 from "./Sec4 - story"
import { Bride, Groom } from "@/data/Person"

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
    </div>
  )
}
