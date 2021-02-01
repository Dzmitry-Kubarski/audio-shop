// core
import Head from 'next/head'

// componnets
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function MainLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <StyledPage>
                <Header />

                <StyledMain className={styles.main}>
                    {children}
                </StyledMain>

                <Footer />
            </StyledPage>
        </>
    )
}

// styles
const StyledPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledMain = styled.main`
   flex-grow: 1;
`