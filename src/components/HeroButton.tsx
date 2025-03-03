import GenericLargeButton from "./GenericLargeButton"
import { DownloadSVG } from "./IconSvg"

const HeroButton = () => {
    return (
        <div className="flex flex-row align-middle justify-center left-0 right-0 top-0 py-20">
            <GenericLargeButton buttonName="Download for Windows" bgColor="bg-white" textColor="black" icon={DownloadSVG()}/>
            <GenericLargeButton buttonName="Open Discord in your desktop" bgColor="bg-[#5865f2]" textColor="white" />
        </div>
    )
}

export default HeroButton