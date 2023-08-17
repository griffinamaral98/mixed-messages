const h1 = document.querySelector("h1");
const jokeBtn = document.querySelector("#button");

jokeBtn.addEventListener("click", () => {
  const rand = Math.floor(Math.random() * 15) + 1;

  h1.textContent = `${dadJokes[rand].question}
  ${dadJokes[rand].answer}`;
});
