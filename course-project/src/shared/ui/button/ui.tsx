import type { ReactNode } from 'react'

interface Button {
  children: ReactNode
}

export const Button = ({ children, ...props }: Button) => {
  return (
    <button style={{ background: 'blue' }} {...props}>
      {children}
    </button>
  )
}
