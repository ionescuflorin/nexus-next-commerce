import { useState, useEffect } from 'react';

function Profile() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <ul>
      {data.map((i: any) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </ul>
  );
}

export default Profile;
