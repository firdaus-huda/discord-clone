import NavbarButton from "./NavbarButton"
import NavbarDropdown from "./NavbarDropdown"

const Navbar = () => {
    return (
    <>
        <div className="flex flex-row align-middle justify-center left-0 right-0 top-0 py-12 w-full">
            <nav className="flex justify-center items-center ">
                <ul className="flex flex-row">
                    <NavbarButton buttonName="Download" />
                    <NavbarButton buttonName="Nitro" />
                    <NavbarButton buttonName="Discover" />
                    <NavbarDropdown buttonName="Safety" />
                    <NavbarDropdown buttonName="Quests" />
                    <NavbarDropdown buttonName="Support" />
                    <NavbarDropdown buttonName="Blog" />
                    <NavbarDropdown buttonName="Developers" />
                    <NavbarButton buttonName="Careers" />
                    
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Navbar
