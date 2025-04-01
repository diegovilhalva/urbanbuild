"use client"

import { Link as ScrollLink } from "react-scroll"

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

const Header = () => {
  return (
    <header className="bg-primary py-4 sticky top-0">
      <div className="container mx-auto">
        <ul className="flex gap-12 text-white">
          {links.map((link, i) => (
            <li key={i}>
              <ScrollLink to={link.path} smooth spy className="cursor-pointer" activeClass="text-accent">{link.name}</ScrollLink>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Header