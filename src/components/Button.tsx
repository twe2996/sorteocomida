import React from 'react'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
export function Button({children, ...props}:Props) {
    
  return (
    <>
        <button className="bg-sky-500 hover:bg-sky-700" {...props}>
            {children}
        </button>
    </>
  )
}

export default Button
