const inputQuestion = document.getElementById
("inputQuestion");
const result = document.getElementById("result")

inputQuestion.addEventListener("keypress", (e) =>{
    if (inputQuestion.value && e.key === "Enter")
    SendQuestion();
})
 const API = 
 "Insira Sua Api Do Chat GPT Aqui"

function SendQuestion() {
    var sQuestion = inputQuestion.value;

    fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + API,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: sQuestion,
      max_tokens: 2048, 
      temperature: 1.0, 
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (result.value) result.value += "\n";

      if (json.error?.message) {
        result.value += `Error: ${json.error.message}`;
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || "Xét Gepete Não Achou Nem no Bing A Resposta";

        result.value += "Xét Gepete Pesquisou No Google E Encontrou: " + text;
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      inputQuestion.value = "";
      inputQuestion.disabled = false;
      inputQuestion.focus();
    });

    if (result.value) result.value += "\n\n\n"

    result.value += `Eu: ${sQuestion}`;
    inputQuestion.value = "Pera Ai, Vou Pesquisar No Google...";
    inputQuestion.disabled = true;

    result.scrolltop = result.scrollHeight;
}
const imgs = document.querySelector("#img");
const img = Array.from(document.querySelectorAll("#img img"));

let idc = 0;

function carrossel() {
  idc++;

  if (idc > img.length - 1) {
    idc = 0;
  }

  imgs.style.transform = `translateX(${-idc * 200}px)`;
}

setInterval(carrossel, 1800);
