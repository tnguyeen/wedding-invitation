"use client"
import { Dancing_Script, Baloo_Bhaijaan_2 } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./CountDown.module.scss"
const dancingScript = Dancing_Script({ subsets: ["latin"] })
import { Person } from "@/data/Person"
import { useEffect, useState } from "react"

// interface PersonProps {
//   person: Person
//   img: StaticImageData
// }
const balooBhaijaan2 = Baloo_Bhaijaan_2({
  subsets: ["latin"],
})

export default function Countdown() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ngayVaGio}>
        <div>
          <span className={balooBhaijaan2.className + " " + styles.count}>
            {CountdownArray()[0]}
          </span>

          <span className={balooBhaijaan2.className}>Ngày</span>
        </div>
        <div>
          <span className={balooBhaijaan2.className + " " + styles.count}>
            {CountdownArray()[1]}
          </span>

          <span className={balooBhaijaan2.className}>Giờ</span>
        </div>
      </div>
      <div className={styles.phutVaGiay}>
        <div>
          <span className={balooBhaijaan2.className + " " + styles.count}>
            {CountdownArray()[2]}
          </span>

          <span className={balooBhaijaan2.className}>Phút</span>
        </div>
        <div>
          <span className={balooBhaijaan2.className + " " + styles.count}>
            {CountdownArray()[3]}
          </span>

          <span className={balooBhaijaan2.className}>Giây</span>
        </div>
      </div>
    </div>
  )
}

function CountdownArray() {
  const tet = new Date("2023-12-28").getTime() - 7 * 60 * 60 * 1000
  const [count, setCount] = useState(tet - new Date().getTime())
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(tet - new Date().getTime())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [tet])
  return getReturnValues(count)
}

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
  const hours = Math.floor((countDown / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((countDown / 1000 / 60) % 60)
  const seconds = Math.floor((countDown / 1000) % 60)
  return [days, hours, minutes, seconds]
}
