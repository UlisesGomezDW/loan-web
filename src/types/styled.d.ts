import { theme } from "./../theme"
import "styled-components"

export type StyledComponentsType = typeof theme

declare module "styled-components" {
    export interface DefaultTheme extends StyledComponentsType {}
}
