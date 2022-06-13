function Page({ data }: any) {
  return (
    <ul>
      {data.map((i: any, index: any) => (
        <li key={index}>{i.title}</li>
      ))}
    </ul>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
