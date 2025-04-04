import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"
import SliderBtns from "./SliderBtns"
const Slider = () => {
    return (
        <Swiper className="bg-white shadow w-full max-w-[630px] h-[200px]">
            <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">Exceed expectations. On time, whitin budget and top quality work. High recommend!</p>
                        <p className="font-primary font-semibold text-primary">Jane Doe</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">Exceed expectations. On time, whitin budget and top quality work. High recommend!</p>
                        <p className="font-primary font-semibold text-primary">Jane Doe</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="pt-12 md:pl-[60px] flex items-center gap-9 h-full">
                    <div className="relative xl:flex w-[90px] h-[90px] hidden ">
                        <Image src='/assets/img/testimonials/avatar.jpg' fill className="object-contain" alt="" />
                    </div>
                    <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                        <p className="">Exceed expectations. On time, whitin budget and top quality work. High recommend!</p>
                        <p className="font-primary font-semibold text-primary">Jane Doe</p>
                    </div>
                </div>
            </SwiperSlide>
            <SliderBtns />
        </Swiper>
    )
}

export default Slider