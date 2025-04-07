import Image from "next/image"
import Button from "./Button"
import Slider from "./Slider"
import PreTitle from "./PreTitle"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"


const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          <motion.div className="flex-1 max-w-[484px] xl:pt-[54px] xl:mb-0 mb-12"  variants={fadeIn("right",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}}>
            <PreTitle text="Testimonals" />
            <h2 className="h2 mb-6">Build on Trust, Proven by Results</h2>
            <p className="mb-10 max-w-[420px]">from homes to commecial spaces, our clients share their experiences of work with us.See how we've help them bring their dreams to live with expert craftsmanship.</p>
            <Button text="Work with us" />
          </motion.div>
          <motion.div  variants={fadeIn("left",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px] ">
              <Image src="/assets/img/testimonials/img.jpg" fill className="object-contain"
                quality={100} alt="" />
            </div>
            < motion.div  variants={fadeIn("left",0.1)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max ">
              <Image src="/assets/img/testimonials/quote.svg" width={54} height={36} alt="" className="absolute z-20 -top-4 left-[60px]" />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials