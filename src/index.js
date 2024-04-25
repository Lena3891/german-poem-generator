new Typewriter("#poem", {
  strings: `Generating the poem here...`,
  autoStart: true,
});

let form = document.querySelector("#poem-generator-form");

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector(".instructions");

  let apiKey = "do37btb04e66032f8eb1ab0493255777";
  let context =
    "You are a poets and poem expert, please carefully follow the instructions.";
  let prompt = `Write a poem about the topic: ${instructions.value}?`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="blink">⏳ Generating poem about ${instructions.value}</span>`;

  function displayPoem(response) {
    new Typewriter("#poem", {
      strings: `${response.data.answer}`,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  axios.get(apiUrl).then(displayPoem);
}

form.addEventListener("submit", generatePoem);
