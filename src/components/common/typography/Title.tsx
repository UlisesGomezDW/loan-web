import styled, { css } from "styled-components"
import { TitleProps } from "./index.types"

const style = css<TitleProps>`
    color: ${({ color, theme }) => color || theme.colors.dark};
    margin: 0px;
`

const H1 = styled.h1`
    ${style};
    font-size: 26px;
`
const H2 = styled.h2`
    ${style};
    font-size: 20px;
`
const H3 = styled.h3`
    ${style};
    font-size: 16px;
`
const H4 = styled.h4`
    ${style}
`
const H5 = styled.h5`
    ${style}
`

function Title(props: TitleProps): JSX.Element {
    const { level = 1 } = props

    return level === 1 ? (
        <H1 {...props} />
    ) : level === 2 ? (
        <H2 {...props} />
    ) : level === 3 ? (
        <H3 {...props} />
    ) : level === 4 ? (
        <H4 {...props} />
    ) : level === 5 ? (
        <H5 {...props} />
    ) : (
        <H1 {...props} />
    )
}

export default Title
