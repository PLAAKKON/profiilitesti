const questions = [
  {
    id: "Q1",
    text: "Millainen työskentelytapa sopii sinulle parhaiten?",
    options: {
      a: "Itsenäinen työ ilman jatkuvaa ohjausta",
      b: "Itsenäinen työ hyvän perehdytyksen jälkeen",
      c: "Yhdistelmä itsenäistä työtä ja ohjausta",
      d: "Tiimityö vastuunjaolla",
      e: "Selkeä ohjaus ja yhteistyö"
    }
  },
  {
    id: "Q2",
    text: "Millaista työympäristöä arvostat?",
    options: {
      a: "Fyysisesti raskas ja vaativa työ",
      b: "Aktiivinen mutta ei fyysisesti raskas ympäristö",
      c: "Toimistopainotteinen ja tarkkuutta vaativa",
      d: "Rauhallinen ja mentaalinen työ"
    }
  }
];

const results = {
  "1": { name: "Puhdistus- ja siivoustyö", threshold: 14, score: 0 },
  "2": { name: "Pakkaus- ja tuotannon apu- ja kokoonpanotyö", threshold: 14, score: 0 }
};

const narratives = {
  Q1: {
    a: "Pidät itsenäisestä työstä ja omatoimisesta tekemisestä.<br />",
    b: "Arvostat hyvää perehdytystä ennen itsenäistä työskentelyä.<br />",
    c: "Pidät yhdistelmästä itsenäisyyttä ja ohjausta.<br />",
    d: "Nautit vastuullisesta tiimityöstä.<br />",
    e: "Selkeä ohjaus ja ryhmätyö ovat sinulle tärkeitä.<br />"
  },
  Q2: {
    a: "Pidät fyysisestä ja haastavasta työstä.<br />",
    b: "Arvostat aktiivista mutta ei liian fyysistä työympäristöä.<br />",
    c: "Keskittyminen ja tarkkuus toimistotyössä ovat vahvuuksiasi.<br />",
    d: "Haluat mentaalisesti vaativaa ja rauhallista työtä.<br />"
  }
};

let currentQuestionIndex = 0;
const answers = {};

document.getElementById("startButton").addEventListener("click", () => {
  currentQuestionIndex = 0;
  answers.length = 0;
  document.getElementById("questionContainer").style.display = "block";
  document.getElementById("resultsContainer").style.display = "none";
  showQuestion();
});

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const container = document.getElementById("questionContainer");
  container.innerHTML = `<h3>${question.text}</h3>`;
  Object.entries(question.options).forEach(([key, label]) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = () => handleAnswer(question.id, key);
    container.appendChild(btn);
    container.appendChild(document.createElement("br"));
  });
}

function handleAnswer(qid, option) {
  answers[qid] = option;

  // Simppeli pisteytys
  if (qid === "Q1" && option === "c") results["1"].score += 6;
  if (qid === "Q2" && option === "b") results["1"].score += 8;

  if (qid === "Q1" && option === "d") results["2"].score += 6;
  if (qid === "Q2" && option === "a") results["2"].score += 8;

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("questionContainer").style.display = "none";
  const resultsList = document.getElementById("resultsList");
  const writtenSummary = document.getElementById("writtenSummary");
  resultsList.innerHTML = "";
  writtenSummary.innerHTML = "";

  Object.entries(results).forEach(([id, prof]) => {
    if (prof.score >= prof.threshold) {
      const li = document.createElement("li");
      li.textContent = prof.name;
      resultsList.appendChild(li);
    }
  });

  Object.entries(answers).forEach(([qid, opt]) => {
    if (narratives[qid] && narratives[qid][opt]) {
      writtenSummary.innerHTML += "• " + narratives[qid][opt];
    }
  });

  document.getElementById("resultsContainer").style.display = "block";
}
