export const Input = (props) => {
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            props.onNextClick();
        }
    }

    return <input autoFocus onKeyPress={onKeyPress} className="p-1.5 rounded" {...props} value={props.value} onChange={props.onChange} />
}