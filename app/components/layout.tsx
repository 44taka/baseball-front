import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'


export default function Layout({children}: { children: any }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <title>プロ野球チャート</title>
            </Head>
            <section className="hero is-small">
                <div className="hero-body">
                    <p className="title">プロ野球チャート</p>
                    <p className="subtitle">プロ野球に関するいろんなデータをチャートにしちゃう。</p>
                </div>
            </section>
            {children}
            <Navbar/>
            <Footer/>
        </>
    )
}
