import {Html, Head, Main, NextScript} from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
            </Head>
            <body className="has-navbar-fixed-top">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
