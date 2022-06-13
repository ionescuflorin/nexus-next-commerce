import useSWR from 'swr';

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((i: any) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}
export default Profile;
