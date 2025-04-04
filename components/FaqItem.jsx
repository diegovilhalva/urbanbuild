import { cn } from "@/lib/utils"
import { useState } from "react"
import { RiSubtractFill, RiAddFill, RiAddBoxFill } from "react-icons/ri"
const FaqItem = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-full border-b ">
            <div className="flex items-center justify-between py-6">
                <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max">{title}</h4>
                <button className="w-[44px] h-[44px] bg-accent flex items-center justify-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <RiSubtractFill className={`text-primary text-2xl transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} />
                    ) : (
                        <RiAddFill className={`text-primary text-2xl transition-opacity duration-700 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    )}
                </button>
            </div>
            <div className={cn(
                "transition-all overflow-hidden opacity-100",
                {
                    "max-h-[200px]  duration-500 ease-in-out": isOpen,
                    "max-h-0  duration-300 ease-in-out": !isOpen
                }
            )}>
                <p className="pb-8 flex items-center max-w-[860px]">{description}</p>
            </div>
        </div>
    )
}

export default FaqItem