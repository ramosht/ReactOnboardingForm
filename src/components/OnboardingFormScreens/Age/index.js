import { useCallback, useState } from "react"
import { Button } from "../../Button"
import { ErrorMessage } from "../../ErrorMessage"
import { Input } from "../../Input"

export const Age = ({onNext}) => {
    const [age, setAge] = useState(null)
    const [error, setError] = useState('')

    const onNextClick = useCallback(() => {
        if(!age) {
            setError('Insert your age')
            return
        }

        onNext({age})
    }, [age, onNext])

    return (
        <label>
            <Input 
                value={age}
                onChange={e => setAge(e.target.value)}
                type="number" 
                onNextClick={onNextClick}
                aria-label="Age" 
                aria-required="true" 
                placeholder="Age" 
                name="Age" 
            />
            <Button onClick={onNextClick}>Next</Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </label>
    )
}