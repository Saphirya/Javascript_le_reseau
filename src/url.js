const url = new URL("https://wikipedia.fr");

url.searchParams.append("name", "tintin");
url.searchParams.set("age", "25");
console.log(url);
