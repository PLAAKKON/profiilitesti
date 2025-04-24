const questions = [
  {
    id: "Q1",
    text: "1/10 Millainen työskentelytapa sopii sinulle parhaiten?",
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
    text: "2/10 Millaista työympäristöä arvostat?",
    options: {
      a: "Fyysisesti raskas ja vaativa työ",
      b: "Aktiivinen mutta ei fyysisesti raskas ympäristö",
      c: "Toimistopainotteinen ja tarkkuutta vaativa",
      d: "Rauhallinen ja mentaalinen työ"
    }
  },
  {
    id: "Q3",
    text: "3/10 Missä ympäristössä viihdyt parhaiten?",
    options: {
      a: "Sisätiloissa",
      b: "Ulkona",
      c: "Vaihtelevissa ympäristöissä",
      d: "Sosiaalisessa ympäristössä"
    }
  },
  {
    id: "Q4",
    text: "4/10 Kuinka tärkeää itsenäisyys on työssäsi?",
    options: {
      a: "Erittäin tärkeää",
      b: "Melko tärkeää",
      c: "Ei kovin tärkeää",
      d: "Ei lainkaan tärkeää"
    }
  },
  {
    id: "Q5",
    text: "5/10 Kuinka paljon haluat käyttää tietotekniikkaa työssäsi?",
    options: {
      a: "Paljon",
      b: "Kohtuullisesti",
      c: "Vähän",
      d: "Ei lainkaan"
    }
  },
  {
    id: "Q6",
    text: "6/10 Kuinka joustavat työajat sopivat sinulle?",
    options: {
      a: "Täysin joustavat",
      b: "Osittain joustavat",
      c: "Kiinteät työajat",
      d: "Ei väliä"
    }
  },
  {
    id: "Q7",
    text: "7/10 Mikä on koulutustaustasi?",
    options: {
      a: "Ei muodollista koulutusta",
      b: "Ammatillinen koulutus",
      c: "Korkeakoulutus"
    }
  },
  {
    id: "Q8",
    text: "8/10 Oletko valmis opiskelemaan uutta?",
    options: {
      a: "Kyllä, täysin valmis",
      b: "Kyllä, mutta vain nykyisellä alalla",
      c: "En tällä hetkellä",
      d: "En lainkaan"
    }
  },
  {
    id: "Q9",
    text: "9/10 Millainen työsuhde sopii sinulle parhaiten?",
    options: {
      a: "Vakituisuus",
      b: "Määräaikaisuus",
      c: "Freelancer-työ"
    }
  },
  {
    id: "Q10",
    text: "10/10 Kuinka tärkeää jatkuva oppiminen on sinulle?",
    options: {
      a: "Erittäin tärkeää",
      b: "Melko tärkeää",
      c: "Ei kovin tärkeää"
    }
  }
];

const results = {
  "1": { name: "Puhdistus- ja siivoustyö", threshold: 14, score: 0 },
  "2": { name: "Pakkaus- ja tuotannon apu- ja kokoonpanotyö", threshold: 14, score: 0 },
  "3": { name: "Toimistotyö", threshold: 17, score: 0 },
  "4": { name: "Asiakaspalvelutyö", threshold: 16, score: 0 },
  "5": { name: "Tekninen asiantuntijatyö", threshold: 18, score: 0 }
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
  },
  Q3: {
    a: "Viihdyt sisätiloissa järjestelmällisessä ympäristössä.<br />",
    b: "Pidät ulkotyöstä ja vaihtelusta.<br />",
    c: "Nautit vaihtelevista työympäristöistä.<br />",
    d: "Sosiaaliset ympäristöt motivoivat sinua.<br />"
  },
  Q4: {
    a: "Itsenäisyys on sinulle erittäin tärkeää.<br />",
    b: "Pidät itsenäisyydestä, mutta arvostat myös yhteistyötä.<br />",
    c: "Itsenäisyys ei ole sinulle kovin tärkeää.<br />",
    d: "Pidät tiimityöstä ja ohjauksesta.<br />"
  },
  Q5: {
    a: "Pidät tietotekniikan käytöstä työssäsi.<br />",
    b: "Käytät tietotekniikkaa kohtuullisesti.<br />",
    c: "Haluat käyttää tietotekniikkaa vain vähän.<br />",
    d: "Et halua käyttää tietotekniikkaa työssäsi.<br />"
  },
  Q6: {
    a: "Täysin joustavat työajat sopivat sinulle parhaiten.<br />",
    b: "Osittain joustavat työajat ovat sinulle sopivia.<br />",
    c: "Pidät kiinteistä työajoista.<br />",
    d: "Työaikojen joustavuudella ei ole sinulle väliä.<br />"
  },
  Q7: {
    a: "Sinulla ei ole muodollista koulutusta, mutta opit nopeasti.<br />",
    b: "Sinulla on ammatillinen koulutus.<br />",
    c: "Sinulla on korkeakoulutus.<br />"
  },
  Q8: {
    a: "Olet valmis opiskelemaan uutta.<br />",
    b: "Haluat opiskella vain nykyisellä alalla.<br />",
    c: "Et ole valmis opiskelemaan tällä hetkellä.<br />",
    d: "Et halua opiskella lainkaan.<br />"
  },
  Q9: {
    a: "Pidät vakituisesta työsuhteesta.<br />",
    b: "Määräaikainen työsuhde sopii sinulle.<br />",
    c: "Freelancer-työ on sinulle sopivin.<br />"
  },
  Q10: {
    a: "Jatkuva oppiminen on sinulle erittäin tärkeää.<br />",
    b: "Pidät oppimisesta, mutta et jatkuvasti.<br />",
    c: "Et pidä jatkuvasta oppimisesta.<br />"
  }
};

let currentQuestionIndex = 0;
const answers = {};

document.getElementById("toggleButton").addEventListener("click", () => {
  if (currentQuestionIndex === 0) {
    currentQuestionIndex = 0;
    Object.keys(answers).forEach(key => delete answers[key]);
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("resultsContainer").style.display = "none";
    showQuestion();
  } else {
    showResults();
  }
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