export async function getPosts() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );
  return data;
}

export async function addPosts(title: string, body: string, userId: string) {
  const data = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
  return data;
}
