interface NavbarButtonProp {
    buttonName: string
}

const NavbarButton = (props:NavbarButtonProp) => {
    return (
    <li className="relative flex flex-row rounded-xl py-2 hover:bg-[#5865f2] ">
        <a href="#" className="text-white font-discord px-5 ">{props.buttonName}</a>
    </li>
    )
}

export default NavbarButton