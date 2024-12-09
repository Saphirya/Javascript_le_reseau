const user = {
  name: "tintin",
  email: "tintin@gmail.com",
};

const promesse = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json",
  },
});

promesse.then(async (response) => {
  console.log(response);
  try {
    const body = await response.json();
    console.log(body);
  } catch (e) {
    console.log(e);
  }
});
