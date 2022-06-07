import { useCallback, useState } from "react"

export const Age = ({onNext}) => {
    const [age, setAge] = useState(null)
    const [error, setError] = useState('')

    const onClickNext = useCallback(() => {
        if(!age) {
            setError('Insert your age')
            return
        }

        onNext({age})
    }, [age, onNext])

    return (
        <label>
            <input 
                value={age}
                onChange={e => setAge(e.target.value)}
                type="number" 
                aria-label="Age" 
                aria-required="true" 
                placeholder="Age" 
                name="Age" 
            />
            <button onClick={onClickNext}>Next</button>
            {error && <p>{error}</p>}
        </label>
    )
}