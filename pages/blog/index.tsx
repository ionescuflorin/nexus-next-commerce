function Blog({ posts }: any) {

  return (
    <ul>
      {posts.map((post: any, index: any) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
}

// Scenario 1: Your page content depends on external data
// -------------------------------------------------------------------------
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
