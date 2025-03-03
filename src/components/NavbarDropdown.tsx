import { ArrowSVG } from "./IconSvg"

interface NavbarDropdownProp {
    buttonName: string
}

const NavbarDropdown = (props:NavbarDropdownProp) => {
    return (
    <li className="relative flex flex-row grow rounded-xl py-2 px-3 justify-center gap-0.5 hover:bg-[#5865f2]">
        <a href="#" className="text-white font-discord">{props.buttonName}</a>
        <div className="top-0 bottom-0">
        <ArrowSVG/>
        </div>
    </li>
    )
}

export default NavbarDropdown