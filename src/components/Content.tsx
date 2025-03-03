interface ContentProps {
    header: string
    content: string
    videoSource: string
    reversePosition?: boolean
}

const Content = (props: ContentProps) => {
    const isReversePosition = props.reversePosition;
    
    if (isReversePosition) {
        return (
            <div className="relative flex h-[40rem] w-full justify-center align-middle">
                <div className="static flex flex-row h-[100%] w-[100rem] shrink-0 top-0 bottom-0 bg-[url(https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787ce4640564a6c2690d6de_F-bg.png)] bg-cover bg-no-repeat rounded-[88px]">
                    <div className="bg-white min-w-[55%] rounded-[70px] m-6 overflow-hidden">
                        <video src={props.videoSource}
                        autoPlay loop muted></video>
                    </div>
                    <div className="h-full flex flex-col align-middle justify-center mx-12">
                        <h1 className="relative uppercase text-white font-discord-nord text-5xl mb-5">{props.header}</h1>
                        <p className="relative text-white font-discord text-xl">{props.content}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative flex h-[40rem] w-full justify-center align-middle">
            <div className="static flex flex-row h-[100%] w-[100rem] shrink-0 top-0 bottom-0 bg-[url(https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6787ce4640564a6c2690d6de_F-bg.png)] bg-cover bg-no-repeat rounded-[88px]">
                <div className="h-full flex flex-col align-middle justify-center mx-12">
                    <h1 className="relative uppercase text-white font-discord-nord text-5xl mb-5">{props.header}</h1>
                    <p className="relative text-white font-discord text-xl">{props.content}</p>
                </div>
                <div className="bg-white min-w-[55%] rounded-[70px] m-6 overflow-hidden">
                    <video src={props.videoSource}
                    autoPlay loop muted></video>
                </div>
            </div>
        </div>
    )
}

export default Content