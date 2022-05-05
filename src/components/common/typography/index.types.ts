import { HTMLProps } from "react"

export interface TextProps extends HTMLProps<HTMLSpanElement> {
    fontSize?: string
    color?: string
    strong?: boolean
    line?: boolean
}

export interface TitleProps {
    color?: string
    level?: number
    className?: string
    children: string
    secondary?: boolean
    onClick?: () => void
}

export interface LinkProps {
    fontSize?: string
    color?: string
    strong?: boolean
    underline?: boolean
}
