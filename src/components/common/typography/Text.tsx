import styled from "styled-components"
import { TextProps } from "./index.types"

const Text = styled.span<TextProps>`
    font-size: ${({ fontSize }) => fontSize || "14px"};
    color: ${({ color, theme }) => color || theme.colors.dark};
    font-weight: ${({ strong }) => (strong ? "bold" : "normal")};
    display: ${({ line }) => (line ? "initial" : "block")};
`

export default Text
