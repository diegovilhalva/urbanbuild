import { motion } from "framer-motion";
import FaqItem from "./FaqItem";
import PreTitle from "./PreTitle";
import { fadeIn } from "@/variants";


const Faq = () => {
  const faqItemsData = [
    {
      title: "How long does a construction project usually take?",
      descripton: "Project duration depends on scope, permits, and weather. A detailed timeline is provided after assessment.",
    },
    {
      title: "Do I need permits for my project?",
      descripton: "Most projects require permits. We handle the paperwork and guide you through local regulations.",
    },
    {
      title: "What materials do you use?",
      descripton: "We use high-quality, industry-standard materials with options for sustainable and custom solutions.",
    },
    {
      title: "Can I make changes after construction starts?",
      descripton: "Changes are possible but may affect timeline and budget. We assess modifications promptly.",
    },
    {
      title: "How much will my construction project cost?",
      descripton: "Costs vary by design complexity and materials. We provide detailed estimates before starting.",
    },
    {
      title: "How do you ensure quality and safety on-site?",
      descripton: "We implement strict safety protocols and conduct daily inspections with certified professionals.",
    },
  ];


  const faqItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.3 }
    })
  }
  return (
    <div className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div  variants={fadeIn("up",0.2)} initial='hidden' whileInView="show" viewport={{once:false,amount:0.2}} className="text-center max-w-[540px] mx-auto xl:mb-20">
          <PreTitle text="Faq" center />
          <h2 className="h2 mb-2">got questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">From project planning to final touches, we've answered the most common questions to help you make informed decisions.</p>
        </motion.div>
        <ul className="w-full flex flex-col">
            {faqItemsData.map((item,index) => (
               <motion.li key={index}  variants={faqItemVariants} initial='hidden' whileInView="visible" viewport={{once:false,amount:0.8}} custom={index}>
                <FaqItem title={item.title} description={item.descripton} />
               </motion.li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq