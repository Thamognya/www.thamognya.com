import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import type { AppProps } from 'next/app'

const Main = ({ children, router }: AppProps) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Thamognya's homepage" />
                <meta name="author" content="Thamognya Kodi" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta name="twitter:title" content="Thamognya Kodi" />
                <meta property="og:site_name" content="Thamognya Kodi" />
                <meta name="og:title" content="Thamognya Kodi" />
                <meta property="og:type" content="website" />
                <title>Thamognya Kodi - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
