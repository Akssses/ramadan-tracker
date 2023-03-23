import Layout from '@/components/shared/Layout'
import '../styles/globals.css'
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
          <ToastContainer />
      </Layout>
  )
}

export default MyApp