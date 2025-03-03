import GenericButton from "./GenericButton"

const Header = () => {
    console.log("BEDJO")
    return (
        <>
            <div className="sticky top-12 z-50">
                <div className="absolute left-0 ml-10">
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e90ab9506850e8a5dd48e3_Discrod_MainLogo.svg"></img>
                </div>
                <GenericButton buttonName="Open Discord"/>
            </div>
        </>
    )
}

export default Header