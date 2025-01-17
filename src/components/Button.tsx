import React, { ReactNode } from "react"



enum Variant {
    ICON = 'text-white rounded border-2 border-slate-400 px-3 py-2 rounded-md bg-white',
    TEXT = 'text-white bg-blue-600 py-2 px-3 rounded-md'
}


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    type: "button" | "submit" | "reset"
    variant: 'text' | 'icon'
}


export default function Button({children, type,variant, ...props}: Props){
    return <button type={type} className={variant === 'text' ? Variant.TEXT : Variant.ICON} {...props}>{children}</button>
}
