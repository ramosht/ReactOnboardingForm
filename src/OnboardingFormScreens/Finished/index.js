export const Finished = ({ currentData }) => {
    return (
        <>
            <h1>Great, {currentData.fullName}!</h1>
            <p>Everything worked fine :)</p>
            {!currentData.inspirationalQuote && <p>Looks like someone isn't a fan of inspirational quotes</p>}
        </>
    )
}   