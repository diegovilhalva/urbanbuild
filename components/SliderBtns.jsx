"use client"
import { useSwiper } from "swiper/react"
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"

const SliderBtns = () => {
    const swiper = useSwiper()
    return (
        <div className="w-max absolute bottom-2 right-2 flex gap-1 z-10">
            <button className="bg-accent text-primary text-[22px] w-[48px] h-[48px] flex justify-center items-center transition-all cursor-pointer" onClick={() => swiper.slidePrev()}><RiArrowLeftLine /></button>
            <button className="bg-accent text-primary text-[22px] w-[48px] h-[48px] flex justify-center items-center transition-all cursor-pointer" onClick={() => swiper.slideNext()}><RiArrowRightLine /></button>
        </div>
    )
}

export default SliderBtns