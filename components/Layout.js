import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'


const Layout = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Example Ecommerce-Site</title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
export default Layout