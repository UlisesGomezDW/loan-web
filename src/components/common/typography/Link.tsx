import styled from "styled-components"
import Link from "next/link"
import { LinkProps } from "./index.types"

const LinkComponent = styled(Link)<LinkProps>`
    font-size: ${({ fontSize }) => fontSize || "14px"};
    color: ${({ color, theme }) => color || theme.colors.dark};
    font-weight: ${({ strong }) => (strong ? "bold" : "400px")};
    text-decoration: ${({ underline = true }) => (underline ? "underline" : "none")};
`

export default LinkComponent
