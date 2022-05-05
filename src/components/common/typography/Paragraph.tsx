import styled from "styled-components"
import { TextProps } from "./index.types"

const Paragraph = styled.p<TextProps>`
    font-size: ${({ fontSize }) => fontSize || "14px"};
    color: ${({ color, theme }) => color || theme.colors.dark};
    font-weight: ${({ strong }) => (strong ? "bold" : "normal")};
    margin: 0;
`

export default Paragraph
