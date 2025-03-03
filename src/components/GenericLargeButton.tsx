import { JSX } from "react"

interface GenericLargeButtonProp {
    buttonName: string,
    textColor?: string,
    bgColor?: string,
    icon?: JSX.Element
}

const GenericLargeButton = (props:GenericLargeButtonProp) => {
    console.log(props.bgColor)
    return (
        <div className={'flex gap-2 right-0 px-5 py-[1.15rem] mr-10 font-discord rounded-[0.8vw] text-xl text-' + props.textColor + ' ' + props.bgColor}>
            {props.icon}
            <p>{props.buttonName}</p>
        </div>
    )
}

export default GenericLargeButton