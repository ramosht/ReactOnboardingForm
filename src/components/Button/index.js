export const Button = ({children, onClick}) => {
    return <button className="bg-[#00000080] text-white py-2 px-6 rounded ml-2" onClick={onClick}>{children}</button>
}