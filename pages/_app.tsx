import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
/**
 * If you need multiple layouts, you can add a property getLayout to your page, allowing you to return a React component for the layout.
 * This allows you to define the layout on a per-page basis. Since we're returning a function, we can have complex nested layouts if desired.
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //@ts-ignore
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
