import React from 'react'

type HeroContainerProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>
const Container: React.FC<HeroContainerProps> = ({ children, ...props }) => {
  return (
    <section {...props}>{children}</section>
  )
}

export default Container