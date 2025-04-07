import { RiChat1Line,  RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri"
import Socials from "./Socials"
import Form from "./Form"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const Contact = () => {
  return (
    <div className='pt-16 xl:pt-32' id='contact'>
      <motion.div  variants={fadeIn("up",0.1)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]" >
              <h4 className="text-[26px] font-primary font-bold mb-6 ">Contact Us </h4>
              <p className="mb-9">Reach out to our construction experts anytime. We're available 24/7 to discuss your project needs, provide estimates, and answer questions.</p>
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Chat to us</h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-primary">contact@urbanbuild.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Office</h5>
                    <p className="mb-4">Come and say hello at our office</p>
                    <p className="font-semibold text-primary">1250 Brickstone Ave, Dallas,TX75201,USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent"/>
                  </div>
                  <div className="">
                    <h5 className="text-[22px] font-semibold font-primary leading-none">Phone</h5>
                    <p className="mb-4">Mon-Fri from  8am to 5pm</p>
                    <p className="font-semibold text-primary">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
              <Socials containerStyles="flex gap-[40px]" iconsStyles="text-primary text-[20px]"/>
            </div>
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Discuss your construction needs with our experts. We'll provide tailored solutions,
                transparent timelines, and competitive pricing. Share your project details below,
                and we'll prepare a comprehensive quote within 24 hours.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact