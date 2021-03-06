import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { theme } from "./../theme"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
