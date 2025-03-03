const Hero = () => {
    return (
        <>
            <div className="flex flex-row justify-center align-middle mx-20 pt-0.5 gap-5">
                <div className="min-w-[35rem] max-w-[35rem] my-auto">
                    <h1 className="uppercase text-white font-discord-nord text-6xl mb-5">Group chat that’s all fun & games</h1>
                    <p className="text-white font-discord text-xl">Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.</p>
                </div>
                <img className="w-[61rem]" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6757e1e6a347d3d02d3580bb_CHARACTERS%20FULL.webp"></img>
            </div>
        </>
    )
}

export default Hero