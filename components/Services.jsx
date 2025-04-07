"use client"
import { useState } from "react"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs"

import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill } from "react-icons/pi"
import Image from "next/image"
import PreTitle from "./PreTitle"
import Button from "./Button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill className="h-9! w-9!" />,
    title: "Connstrution Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, expretise tranforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing  &  Roofing",
      "Interior Finish"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ]
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill className="h-9! w-9!" />,
    title: "Renovation Services",
    description: "Revitalizing spaces with modern designs and high-quality craftmanship. Whether upgrading a home or remodeling an  office we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ]
  },
  {
    name: "restoration",
    icon: <PiWrenchFill className="h-9! w-9!" />,
    title: "Restoration Services",
    description: "Bringing damaged or aging strutures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damaged",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ]
  },
  {
    name: "consulting",
    icon: <PiUserGearFill className="h-9! w-9!" />,
    title: "Consulting Services",
    description: "Providing expert guidance for construction and renovation projects. From planing and budgeting to compliance and susteinability , our consulting service ensure project success",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety"
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ]
  },
]

const fadeInVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } }
}


const Services = () => {
  const [activeTab, setActiveTab] = useState("construction")
  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView="show" viewport={{ once: false, amount: 0.2 }} className="text-center max-w-[540px] mx-auto mb-20">
          <PreTitle text={"Our Services"} center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">Offering tailored contruction solutions,from planning to completion, with a focus on quality and innovation.</p>
        </motion.div>
        < motion.div   variants={fadeIn("up",0.3)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} >

          <Tabs defaultValue="construction" onValueChange={(value) => setActiveTab(value)} className="flex flex-col xl:flex-row gap-[30px]">
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px]  h-full w-full! rounded-none p-0 bg-transparent xl:w-[345px]!">
              {serviceData.map((item) => (
                <TabsTrigger key={item.name} value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow p-0 outline-none">
                  <div className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 
                ${activeTab === item.name ? "bg-primary text-white" : "bg-accent text-primary"}`
                  }>
                    <div >
                      {item.icon}
                    </div>
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px]
                ml-16">{item.name}</div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 bg-white shadow h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div variants={fadeInVariants} initial='hidden' whileInView="show" exit="hidden" className="flex flex-col md:flex-row  gap-[30px] ">
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, i) => (
                        <div
                          key={i}
                          className="relative w-[140px] h-[140px] xl:w-[200px] xl:h-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            fill
                            alt=""
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, i) => (
                            <li key={i} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">{service}</div>
                            </li>
                          ))}
                        </ul>
                        <Button text='Read more' />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

export default Services