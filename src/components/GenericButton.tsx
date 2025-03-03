interface GenericButtonProp {
    buttonName: string
}

const GenericButton = (props:GenericButtonProp) => {
    return (
        <>
            <div className="bg-white absolute right-0 px-5 py-2 mr-10 font-discord rounded-[0.8vw] hover:bg-gray-300">
                <p>{props.buttonName}</p>
            </div>
        </>
    )
}

export default GenericButton