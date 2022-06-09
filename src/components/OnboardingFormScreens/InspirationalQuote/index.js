import { useCallback, useState } from "react"
import { Button } from "../../Button"
import { Input } from "../../Input"

export const InspirationalQuote = ({onNext}) => {
    const [inspirationalQuote, setInspirationalQuote] = useState(null)

    const onNextClick = useCallback(() => {
        onNext({inspirationalQuote})
    }, [inspirationalQuote, onNext])

    return (
        <label>
            <Input 
                value={inspirationalQuote}
                onChange={e => setInspirationalQuote(e.target.value)}
                type="text" 
                onNextClick={onNextClick}
                aria-label="Inspirational Quote" 
                aria-required="true" 
                placeholder="Tell us an inpirational quote (optional)" 
                name="inspirationalQuote" 
            />
            <Button onClick={onNextClick}>Next</Button>
        </label>
    )
}   