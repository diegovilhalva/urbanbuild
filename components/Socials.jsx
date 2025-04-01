import Link from "next/link"

import { RiFacebookFill, RiYoutubeFill, RiTwitterXFill, RiInstagramFill } from "react-icons/ri"


const socials = [
    {
        icon: <RiFacebookFill />,
        path: "https://facebook.com"
    },
    {
        icon: <RiYoutubeFill />,
        path: "https://youtube.com"
    },
    {
        icon: <RiTwitterXFill />,
        path: "https://x.com"
    },
    {
        icon: <RiInstagramFill />,
        path: "https://instagram.com"
    }
]
const Socials = ({containerStyles,iconsStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {socials.map((item,index) => (
                <Link href={item.path} target="_blank" key={index} className={`${iconsStyles}`}>
                    {item.icon}
                </Link>
            )) }
        </div>
    )
}

export default Socials