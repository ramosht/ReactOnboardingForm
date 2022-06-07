import { useCallback, useState } from "react"

export const FullName = ({onNext}) => {
    const [fullName, setFullName] = useState('')
    const [error, setError] = useState('')

    const onNameChange = useCallback((fullNamePreFormatted) => {
        const splittedName = fullNamePreFormatted.split(' ');
        const formattedName = splittedName.map(name => {
            if(name.length >= 3) {
                return name.charAt(0).toUpperCase() + name.slice(1,)
            } else {
                return name
            }
        })
        setFullName(formattedName.join(' '))
    }, [])

    const onNextClick = useCallback(() => {
        if(!fullName) {
            setError('Insert a valid name')
            return
        }

        if(fullName.trim().split(' ').length < 2) {
            setError('Please, insert your full name')
            return
        }

        onNext({fullName})
    }, [fullName,onNext])

    return (
        <label>
            <input 
                value={fullName} 
                onChange={e => onNameChange(e.target.value)} 
                type="text" 
                aria-label="fullname" 
                aria-required="true" 
                placeholder="Full name" 
                name="fullname" 
            />
            <button onClick={onNextClick}>Next</button>
            {error && <p>{error}</p>}
        </label>
    )
}