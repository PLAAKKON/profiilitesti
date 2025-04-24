const questions = [
  {
    id: "Q1",
    text: "1/10 Millainen työskentelytapa sopii sinulle parhaiten?",
    options: {
      a: { label: "Itsenäinen työ ilman jatkuvaa ohjausta", points: { 1: 2, 2: 1 } },
      b: { label: "Itsenäinen työ hyvän perehdytyksen jälkeen", points: { 1: 1, 3: 2 } },
      c: { label: "Yhdistelmä itsenäistä työtä ja ohjausta", points: { 2: 2, 4: 1 } },
      d: { label: "Tiimityö vastuunjaolla", points: { 3: 1, 4: 2 } },
      e: { label: "Selkeä ohjaus ja yhteistyö", points: { 2: 1, 3: 2 } }
    }
  },
  {
    id: "Q2",
    text: "2/10 Millaista työympäristöä arvostat?",
    options: {
      a: { label: "Fyysisesti raskas ja vaativa työ", points: { 1: 2, 2: 1 } },
      b: { label: "Aktiivinen mutta ei fyysisesti raskas ympäristö", points: { 3: 2, 4: 1 } },
      c: { label: "Toimistopainotteinen ja tarkkuutta vaativa", points: { 2: 1, 3: 2 } },
      d: { label: "Rauhallinen ja mentaalinen työ", points: { 4: 2, 5: 1 } }
    }
  },
  {
    id: "Q3",
    text: "3/10 Missä ympäristössä viihdyt parhaiten?",
    options: {
      a: { label: "Sisätiloissa", points: { 2: 2, 3: 1 } },
      b: { label: "Ulkona", points: { 1: 2, 4: 1 } },
      c: { label: "Vaihtelevissa ympäristöissä", points: { 3: 2, 5: 1 } },
      d: { label: "Sosiaalisessa ympäristössä", points: { 4: 2, 5: 2 } }
    }
  },
  {
    id: "Q4",
    text: "4/10 Kuinka tärkeää itsenäisyys on työssäsi?",
    options: {
      a: { label: "Erittäin tärkeää", points: { 1: 2, 2: 1 } },
      b: { label: "Melko tärkeää", points: { 2: 2, 3: 1 } },
      c: { label: "Ei kovin tärkeää", points: { 3: 2, 4: 1 } },
      d: { label: "Ei lainkaan tärkeää", points: { 4: 2, 5: 1 } }
    }
  },
  {
    id: "Q5",
    text: "5/10 Kuinka paljon haluat käyttää tietotekniikkaa työssäsi?",
    options: {
      a: { label: "Paljon", points: { 5: 2, 3: 1 } },
      b: { label: "Kohtuullisesti", points: { 3: 2, 4: 1 } },
      c: { label: "Vähän", points: { 2: 2, 1: 1 } },
      d: { label: "Ei lainkaan", points: { 1: 2, 2: 1 } }
    }
  },
  {
    id: "Q6",
    text: "6/10 Kuinka joustavat työajat sopivat sinulle?",
    options: {
      a: { label: "Täysin joustavat", points: { 1: 2, 5: 1 } },
      b: { label: "Osittain joustavat", points: { 2: 2, 4: 1 } },
      c: { label: "Kiinteät työajat", points: { 3: 2, 5: 1 } },
      d: { label: "Ei väliä", points: { 4: 2, 1: 1 } }
    }
  },
  {
    id: "Q7",
    text: "7/10 Mikä on koulutustaustasi?",
    options: {
      a: { label: "Ei muodollista koulutusta", points: { 1: 2, 2: 1 } },
      b: { label: "Ammatillinen koulutus", points: { 3: 2, 4: 1 } },
      c: { label: "Korkeakoulutus", points: { 5: 2, 4: 1 } }
    }
  },
  {
    id: "Q8",
    text: "8/10 Oletko valmis opiskelemaan uutta?",
    options: {
      a: { label: "Kyllä, täysin valmis", points: { 5: 2, 3: 1 } },
      b: { label: "Kyllä, mutta vain nykyisellä alalla", points: { 3: 2, 4: 1 } },
      c: { label: "En tällä hetkellä", points: { 2: 2, 1: 1 } },
      d: { label: "En lainkaan", points: { 1: 2, 2: 1 } }
    }
  },
  {
    id: "Q9",
    text: "9/10 Millainen työsuhde sopii sinulle parhaiten?",
    options: {
      a: { label: "Vakituisuus", points: { 3: 2, 4: 1 } },
      b: { label: "Määräaikaisuus", points: { 2: 2, 1: 1 } },
      c: { label: "Freelancer-työ", points: { 5: 2, 3: 1 } }
    }
  },
  {
    id: "Q10",
    text: "10/10 Kuinka tärkeää jatkuva oppiminen on sinulle?",
    options: {
      a: { label: "Erittäin tärkeää", points: { 5: 2, 3: 1 } },
      b: { label: "Melko tärkeää", points: { 3: 2, 4: 1 } },
      c: { label: "Ei kovin tärkeää", points: { 2: 2, 1: 1 } }
    }
  }
];

const results = {
  "1": { name: "Puhdistus- ja siivoustyö", threshold: 14, score: 0 },
  "2": { name: "Pakkaus- ja tuotannon apu- ja kokoonpanotyö", threshold: 14, score: 0 },
  "3": { name: "Toimistotyö", threshold: 17, score: 0 },
  "4": { name: "Asiakaspalvelutyö", threshold: 16, score: 0 },
  "5": { name: "Tekninen asiantuntijatyö", threshold: 18, score: 0 },
  "6": { name: "Rakennus- ja korjaustyö", threshold: 15, score: 0 },
  "7": { name: "Kuljetus- ja logistiikkatyö", threshold: 15, score: 0 },
  "8": { name: "Sosiaali- ja terveysala", threshold: 18, score: 0 },
  "9": { name: "Opetus- ja koulutustyö", threshold: 19, score: 0 },
  "10": { name: "Luova suunnittelutyö", threshold: 20, score: 0 },
  "11": { name: "IT- ja ohjelmistokehitys", threshold: 20, score: 0 },
  "12": { name: "Maatalous- ja ympäristötyö", threshold: 14, score: 0 },
  "13": { name: "Myynti- ja markkinointityö", threshold: 16, score: 0 },
  "14": { name: "Johtamis- ja esimiestyö", threshold: 21, score: 0 },
  "15": { name: "Kulttuuri- ja viihdetyö", threshold: 20, score: 0 },
  "16": { name: "Tieteellinen tutkimustyö", threshold: 22, score: 0 },
  "17": { name: "Käsityö- ja taidetyö", threshold: 18, score: 0 },
  "18": { name: "Kone- ja metallityö", threshold: 15, score: 0 },
  "19": { name: "Sähkö- ja automaatiotyö", threshold: 16, score: 0 },
  "20": { name: "Elintarvike- ja ravitsemustyö", threshold: 14, score: 0 },
  "21": { name: "Kiinteistöhuolto- ja ylläpitotyö", threshold: 14, score: 0 },
  "22": { name: "Turvallisuus- ja vartiointityö", threshold: 15, score: 0 },
  "23": { name: "Matkailu- ja ravintola-ala", threshold: 16, score: 0 },
  "24": { name: "Urheilu- ja liikunta-ala", threshold: 17, score: 0 },
  "25": { name: "Freelancer-työ", threshold: 18, score: 0 },
  "26": { name: "Kansainvälinen työ", threshold: 19, score: 0 },
  "27": { name: "Vapaaehtoistyö", threshold: 13, score: 0 },
  "28": { name: "Ympäristö- ja kestävän kehityksen työ", threshold: 18, score: 0 },
  "29": { name: "Tutkimus- ja kehitystyö", threshold: 20, score: 0 },
  "30": { name: "Koulutus- ja valmennustyö", threshold: 19, score: 0 },
  "31": { name: "Konsultointi- ja asiantuntijatyö", threshold: 21, score: 0 },
  "32": { name: "Projektinhallinta", threshold: 20, score: 0 }
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

  // Päivitetty pisteytyslogiikka
  const question = questions.find(q => q.id === qid);
  if (question && question.options[option]) {
    const points = question.options[option].points || {};
    Object.entries(points).forEach(([resultId, score]) => {
      if (results[resultId]) {
        results[resultId].score += score;
      }
    });
  }

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

  // Näytä tulokset, jotka ylittävät kynnyksen
  Object.entries(results).forEach(([id, prof]) => {
    if (prof.score >= prof.threshold) {
      const li = document.createElement("li");
      li.textContent = prof.name;
      resultsList.appendChild(li);
    }
  });

  // Näytä narratiivit vastausten perusteella
  Object.entries(answers).forEach(([qid, opt]) => {
    if (narratives[qid] && narratives[qid][opt]) {
      writtenSummary.innerHTML += "• " + narratives[qid][opt];
    }
  });

  document.getElementById("resultsContainer").style.display = "block";
}