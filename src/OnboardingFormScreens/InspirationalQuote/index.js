import { useCallback, useState } from "react"

export const InspirationalQuote = ({onNext}) => {
    const [inpirationalQuote, setInspirationalQuote] = useState(null)

    const onClickNext = useCallback(() => {
        onNext({inpirationalQuote})
    }, [inpirationalQuote, onNext])

    return (
        <label>
            <input 
                value={inpirationalQuote}
                onChange={e => setInspirationalQuote(e.target.value)}
                type="text" 
                aria-label="Inspirational Quote" 
                aria-required="true" 
                placeholder="Tell us an inpirational quote (optional)" 
                name="inpirationalQuote" 
            />
            <button onClick={onClickNext}>Next</button>
        </label>
    )
}   