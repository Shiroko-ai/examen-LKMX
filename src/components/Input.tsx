interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export default function Input ({value, onChange,className, ...props}:Props) {
    return <input
    className={`border-2 border-slate-400 rounded flex-1 p-2 focus:border-red-500 appearance-none focus:outline-none  ${className}`}
    value={value}
    onChange={onChange}
    {...props}
    />
}
