import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <div>COMPLEX LAYOUT</div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

// import useSWR from 'swr'
// import Navbar from './navbar'
// import Footer from './footer'
// export default function Layout({ children }: any) {
//     const { data, error } = useSWR('/api/navigation', fetcher);
//     if (error) return <div>Failed to load</div>;
//     if (!data) return <div>Loading...</div>;
//     return (
//       <>
//         <Navbar links={data.links} />
//         <main>{children}</main>
//         <Footer />
//       </>
//     );
//   }
  