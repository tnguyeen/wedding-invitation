"use client"
import { Dancing_Script, Lemonada } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import styles from "./Cart.module.scss"
const dancingScript = Dancing_Script({ subsets: ["latin"] })
const lemonada = Lemonada({ subsets: ["latin"] })
import { Person } from "@/data/Person"
import { rise, appear, addtoAppear, addtoRise } from "@/cpns/scrollTrigger"
import { useEffect, useRef } from "react"

export type Story = {
  heading: string
  main: string
}

interface CartProps {
  story: Story
  index: number
}

export function Cart({ story, index }: CartProps) {
  const riseArr = useRef<Array<HTMLDivElement>>([])
  const appearArr = useRef<Array<HTMLDivElement>>([])
  useEffect(() => {
    riseArr.current.forEach(rise)
    appearArr.current.forEach(appear)
  }, [])
  return (
    <div
      className={styles.wrapperCart}
      ref={(el) => {
        el && addtoAppear(el, riseArr)
      }}
    >
      <h3
        className={dancingScript.className}
        style={index % 2 == 0 ? { alignSelf: "flex-end" } : {}}
      >
        {story.heading}
      </h3>
      <p className={lemonada.className}>{story.main}</p>
    </div>
  )
}
