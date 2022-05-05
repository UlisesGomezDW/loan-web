import styled, { css } from "styled-components"
import { baseStyle, startStyle, centerStyle, flexStyle, gridStyle } from "./index.styled"
import { Props } from "./index.type"

export const View = styled.div<Props>`
    ${baseStyle};
    ${({ center, grid, row }) =>
        grid
            ? gridStyle
            : center
            ? css`
                  ${flexStyle};
                  ${centerStyle};
                  flex-direction: ${row ? "row" : "column"};
              `
            : css`
                  ${flexStyle};
                  ${startStyle};
                  flex-direction: ${row ? "row" : "column"};
              `}
`

export const SectionView = styled.section<Props>`
    ${baseStyle};
    ${({ center, grid, row }) =>
        grid
            ? gridStyle
            : center
            ? css`
                  ${flexStyle};
                  ${centerStyle};
                  flex-direction: ${row ? "row" : "column"};
              `
            : css`
                  ${flexStyle};
                  ${startStyle};
                  flex-direction: ${row ? "row" : "column"};
              `}
`

export const CardView = styled.div<Props>`
    ${baseStyle};
    box-shadow: 0px 4px 4px #cadae9;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    ${({ center, grid, row }) =>
        grid
            ? gridStyle
            : center
            ? css`
                  ${flexStyle};
                  ${centerStyle};
                  flex-direction: ${row ? "row" : "column"};
              `
            : css`
                  ${flexStyle};
                  ${startStyle};
                  flex-direction: ${row ? "row" : "column"};
              `}
`

export const FormView = styled.form<Props>`
    ${baseStyle};
    ${flexStyle};
    ${({ center }) => (center ? centerStyle : startStyle)}
    flex-direction: ${({ row }) => (row ? "row" : "column")};
`

export const ScreenView = styled(View)`
    height: calc(100% - 40px);
    padding: 25px 40px;
`

export default View
