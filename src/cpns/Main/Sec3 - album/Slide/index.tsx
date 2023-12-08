import Image, { StaticImageData } from "next/image"
import styles from "./Main.module.scss"
import Imgs from "../picture"
import nextBtn from "./nextBtn.png"
import { MouseEventHandler, useEffect, useRef, useState } from "react"

interface SliderProps {
  handleClose: MouseEventHandler<HTMLButtonElement>
  index: number
}
interface SlideProps {
  src: string | StaticImageData
}
interface ControllBtnProps {
  handlePrevClick: MouseEventHandler<HTMLButtonElement>
  handleNextClick: MouseEventHandler<HTMLButtonElement>
  handleClose: MouseEventHandler<HTMLButtonElement>
}

export default function Slider({ handleClose, index }: SliderProps) {
  const [current, setCurrent] = useState<number>(index)

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / Imgs.length)}%)`,
  }
  function handlePreviousClick() {
    const previous = current - 1
    setCurrent(previous < 0 ? Imgs.length - 1 : previous)
  }
  function handleNextClick() {
    const next = current + 1
    setCurrent(next === Imgs.length ? 0 : next)
  }

  return (
    <>
      <div className={styles.wrapper} style={wrapperTransform}>
        {Imgs.map((slide, i) => {
          return <Slide src={slide} key={i} />
        })}
      </div>
      <ControllBtn
        handleNextClick={handleNextClick}
        handlePrevClick={handlePreviousClick}
        handleClose={handleClose}
      />
    </>
  )
}

function Slide({ src }: SlideProps) {
  return (
    <div className={styles.slide}>
      <Image alt="slide" src={src} className={styles.mainImg} />
    </div>
  )
}

function ControllBtn({
  handlePrevClick,
  handleNextClick,
  handleClose,
}: ControllBtnProps) {
  return (
    <div className={styles.wrapperBtn}>
      <button
        onClick={handlePrevClick}
        className={styles.btn + " " + styles.prevBtn}
      >
        <svg
          className="icon"
          viewBox="0 0 24 24"
          style={{ transform: "rotate(180deg)" }}
          width={60}
        >
          <path
            fill="#ffffff"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className={styles.btn + " " + styles.nextBtn}
      >
        <svg className="icon" width={60} viewBox="0 0 24 24">
          <path
            fill="#ffffff"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </button>
      <span className={styles.closeBtn} onClick={handleClose}>
        <svg width={50} viewBox="0 0 64 64">
          <path
            fill="#ffffff"
            d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
          ></path>
        </svg>
      </span>
    </div>
  )
}
