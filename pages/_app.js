// Next-Including-Special-Component-To-Wrap-All-Components
import Layout from '../components/layout/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // Next-Including-Special-Component-To-Wrap-All-Components
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
