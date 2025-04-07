import Image from "next/image"
import PreTitle from "./PreTitle"
import Button from "./Button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"


const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1 ">
            <motion.div variants={fadeIn("right",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="max-w-[540px]">
              <PreTitle text="About us"  />
              <h2 className="h2 mb-6">Focused on Excellence in Every Project</h2>
              <p className="mb-11">Our unwearing commitment to excellence drives  every project we undertake. From concept to completion, we meticulously craft solutions that embody quality, precision and innovation.</p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image src="/assets/img/about/signature.svg" width={154} height={38} alt="" />
                <p>Company CEO</p>
              </div>
              <Button text="Contact us" />
            </motion.div>
          </div>
          <motion.div variants={fadeIn("left",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image src={"/assets/img/about/img.jpg"} width={444} height={492} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About