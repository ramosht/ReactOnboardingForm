export const Finished = ({ currentData }) => {
    return (
        <div className="text-left flex flex-col grow align-start">
            <h1 className="text-white text-3xl mb-5">Great, {currentData.fullName.split(' ')[0]}!</h1>
            <p className="text-white mb-2">Everything worked fine :)</p>
            {!currentData.inspirationalQuote && <p className="text-white">Looks like someone isn't a fan of inspirational quotes</p>}
        </div>
    )
}   