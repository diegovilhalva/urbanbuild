"use client"


import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

import { RiMenu3Fill } from 'react-icons/ri'

import { Link as ScrollLink } from "react-scroll"
import Logo from "./Logo"
import Socials from "./Socials"

const links = [
    {
        name: "home",
        path: "home"
    },
    {
        name: "about",
        path: "about"
    },
    {
        name: "services",
        path: "services"
    },
    {
        name: "projects",
        path: "projects"
    },
    {
        name: "contact",
        path: "contact"
    }
]


const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-white flex justify-center text-3xl"
                onClick={() => setIsOpen(true)}>
                <RiMenu3Fill />
            </SheetTrigger>
            <SheetContent className='bg-primary border-none text-white'>
                <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
                    <SheetHeader>
                        <SheetTitle><Logo /></SheetTitle>
                        <SheetDescription className="sr-only">

                        </SheetDescription>
                    </SheetHeader>
                    <ul className="w-full flex flex-col gap-10 justify-center text-center">
                        {links.map((link,index) => (
                            <li key={index} className="text-white uppercase font-primary font-medium tracking-[1.2px]">
                                <ScrollLink to={link.path} smooth spy duration={500} className="cursor-pointer" activeClass="text-accent" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                    <Socials containerStyles="text-white text-xl flex gap-6"/>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default NavMobile