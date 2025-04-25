const questions = [
  {
    id: "Q1",
    text: "1/10 Kuvaus työskentelytavastasi:",
    options: {
      a: { label: "Olen itsenäinen työntekijä ja perehdyn mielelläni työohjeisiin omatoimisesti.", points: { 1: 2, 2: 2, 3: 2, 4: 1, 5: 2, 6: 2, 8: 1, 12: 2, 13: 2, 14: 1, 15: 1, 16: 1, 17: 2, 18: 2, 19: 1, 20: 1, 21: 1, 22: 1, 23: 2, 24: 2, 25: 2, 26: 1, 27: 2, 28: 2, 29: 1, 30: 1, 31: 1, 32: 1 } },
      b: { label: "Arvostan perusteellista perehdytystä, jonka avulla voin työskennellä itsenäisesti.", points: { 1: 2, 2: 2, 3: 2, 4: 1, 5: 2, 6: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Pidän itsenäisestä työskentelystä, mutta arvostan myös säännöllistä ohjausta.", points: { 1: 1, 2: 1, 3: 1, 5: 1, 6: 1, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 1, 18: 1, 19: 2, 20: 2, 21: 2, 22: 2, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 2, 30: 2, 31: 2, 32: 2 } },
      d: { label: "Olen sosiaalinen ja viihdyn tiimityössä.", points: { 1: 1, 2: 1, 5: 2, 6: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      e: { label: "Pidän selkeästä ohjauksesta ja viihdyn tiimityössä.", points: { 5: 2, 6: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } }
    }
  },
  {
    id: "Q2",
    text: "2/10 Millaista työympäristöä arvostat?",
    options: {
      a: { label: "Olen valmis fyysiseen ja käytännönläheiseen työhön.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 1, 6: 2, 20: 2 } },
      b: { label: "Pidän toiminnallisesta työstä, jossa saan olla liikkeessä.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 1, 6: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 2, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } },
      c: { label: "Pidän keskittymistä ja tarkkuutta vaativasta työstä.", points: { 3: 1, 5: 1, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      d: { label: "Nautin vuorovaikutteisesta työstä sosiaalisessa ympäristössä.", points: { 5: 1, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } }
    }
  },
  {
    id: "Q3",
    text: "3/10 Kumpi kuvaa sinua paremmin?",
    options: {
      a: { label: "Pidän työskentelystä sisätiloissa rauhallisessa ympäristössä.", points: { 1: 2, 2: 2, 3: 2, 5: 1, 6: 2, 8: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Tykkään työskennellä ulkona tai liikkuvassa työssä.", points: { 3: 1, 4: 2, 5: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } },
      c: { label: "Viihdyn vaihtelevissa työympäristöissä ja monipuolisissa tehtävissä.", points: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      d: { label: "Sosiaaliset ympäristöt ja asiakaspalvelu motivoivat minua.", points: { 5: 1, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } }
    }
  },
  {
    id: "Q4",
    text: "4/10 Miten suhtaudut päätöksentekoon työssä?",
    options: {
      a: { label: "Työskentelen mielelläni itsenäisesti ja hallitsen itse aikatauluni.", points: { 1: 2, 2: 2, 3: 1, 6: 2, 12: 2, 13: 2, 14: 1, 15: 1, 16: 1, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 1, 25: 1, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Pidän työstä, jossa voin tehdä päätöksiä itsenäisesti, mutta tarvittaessa teen yhteistyötä.", points: { 1: 2, 2: 2, 3: 2, 4: 1, 5: 1, 6: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Työskentelen mielelläni tiimissä, jossa yhteistyö on tärkeässä roolissa.", points: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 1, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 2, 25: 2, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } },
      d: { label: "Nautin vuorovaikutuksesta ja ihmisläheisestä työstä.", points: { 5: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } }
    }
  },
  {
    id: "Q5",
    text: "5/10 Suhde tietotekniikkaan työssä:",
    options: {
      a: { label: "Olen taitava tietotekniikan käyttäjä ja hyödynnän sujuvasti erilaisia ohjelmistoja.", points: { 1: 1, 2: 1, 5: 2, 7: 2, 8: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Hyödynnän tietotekniikkaa tarvittaessa ja pidän monipuolisista tehtävistä.", points: { 1: 2, 2: 2, 3: 1, 4: 1, 5: 2, 6: 1, 7: 2, 8: 2, 9: 1, 10: 2, 11: 2, 12: 1, 13: 1, 14: 1, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Viihdyn käytännön tekemiseen painottuvissa työtehtävissä.", points: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 1, 8: 1, 9: 2, 10: 1, 11: 1, 15: 1, 16: 1 } },
      d: { label: "Toivon löytäväni työn, jossa ei juuri tarvitse käyttää tietokonetta.", points: { 3: 2, 4: 2, 6: 2, 9: 2 } },
      e: { label: "Olen joustava tehtävien suhteen, oli tietokoneen käyttöä paljon tai vähän.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } }
    }
  },
  {
    id: "Q6",
    text: "6/10 Mitä ajattelet työajoista?",
    options: {
      a: { label: "Arvostan täysin joustavia työaikoja, jotka voin päättää itse.", points: { 1: 2, 2: 2, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 1, 17: 2, 18: 2, 19: 1, 20: 1, 21: 1, 22: 1, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 1, 30: 1, 31: 1, 32: 1 } },
      b: { label: "Joustavat työajat sopisivat minulle hyvin.", points: { 1: 2, 2: 2, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 1, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Pidän kiinteistä työajoista, jotka tuovat selkeyttä arkeen.", points: { 3: 2, 4: 2, 7: 2, 8: 1, 9: 1, 10: 2, 11: 2, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 2, 20: 2, 21: 2, 22: 2, 23: 1, 26: 1, 27: 1, 28: 1, 29: 2, 30: 2, 31: 2, 32: 2 } },
      d: { label: "Sopeudun sekä kiinteisiin että joustaviin aikatauluihin.", points: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 1, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } }
    }
  },
  {
    id: "Q7",
    text: "7/10 Mikä on koulutustaustasi?",
    options: {
      a: { label: "Olen oppinut työni käytännössä, ilman muodollista koulutusta.", points: { 12: -2, 13: -1, 14: -2, 15: -2, 17: -2, 19: -2, 21: -3, 22: -3, 23: -3 } },
      b: { label: "Olen suorittanut keskiasteen koulutuksen (esim. ammattikoulu).", points: { 12: -1, 13: -1, 14: -1, 17: -2, 19: -2, 21: -3, 22: -2, 23: -1 } },
      c: { label: "Minulla on korkeakoulututkinto.", points: { 23: -100 } }
    }
  },
  {
    id: "Q8",
    text: "8/10 Miten suhtaudut alan vaihtoon ja opiskeluun?",
    options: {
      a: { label: "Olen avoin uusille mahdollisuuksille ja valmis opiskelemaan uutta alaa varten.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Haluan syventää osaamistani nykyisellä alallani ja olen valmis opiskelemaan uutta.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 1, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Olen avoin alanvaihdolle, mutta en voi sitoutua uusiin opintoihin.", points: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } },
      d: { label: "Haluan jatkaa nykyisellä alallani enkä suunnittele lisäkoulutusta.", points: {} },
      e: { label: "Olen valmis vaihtamaan alaa, jolle nykyiset taitoni riittävät (ilman uutta koulutusta).", points: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } }
    }
  },
  {
    id: "Q9",
    text: "9/10 Millainen työsuhde sopii sinulle parhaiten?",
    options: {
      a: { label: "Etsin vakituista työpaikkaa ja arvostan työn vakautta.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 1, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Voin työskennellä sekä vakituisessa että määräaikaisessa työsuhteessa.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 1, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      c: { label: "Pidän freelancer-työn vapaudesta ja oman työajan hallinnasta.", points: { 25: 2 } }
    }
  },
  {
    id: "Q10",
    text: "10/10 Miten suhtaudut osaamisen kehittämiseen työssäsi?",
    options: {
      a: { label: "Olen sitoutunut jatkuvaan oppimiseen ja kehitän aktiivisesti osaamistani.", points: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 2, 19: 2, 20: 2, 21: 2, 22: 2, 23: 2, 24: 2, 25: 2, 26: 2, 27: 2, 28: 2, 29: 2, 30: 2, 31: 2, 32: 2 } },
      b: { label: "Kehitän mielelläni taitojani, kunhan tahti on kohtuullinen.", points: { 1: 2, 2: 2, 3: 2, 4: 1, 5: 1, 6: 2, 7: 1, 8: 2, 9: 2, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } },
      c: { label: "Haluan, että työssäni riittää nykyiset taitoni.", points: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 1, 15: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 21: 1, 22: 1, 23: 1, 24: 1, 25: 1, 26: 1, 27: 1, 28: 1, 29: 1, 30: 1, 31: 1, 32: 1 } }
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
  Object.entries(question.options).forEach(([key, option]) => {
    const btn = document.createElement("button");
    btn.textContent = option.label; // Korjattu: Näytetään label-arvo
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

  // Debug: Tulosta päivitetyt pisteet
  console.log("Päivitetyt pisteet:", results);

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
  const writtenSummaryContainer = document.getElementById("writtenSummaryContainer");
  resultsList.innerHTML = "";
  writtenSummary.innerHTML = ""; // Tyhjennetään kirjallinen kuvaus ennen päivitystä

  // Näytä tulokset, jotka ylittävät kynnyksen
  Object.entries(results).forEach(([id, prof]) => {
    if (prof.score >= prof.threshold) {
      const li = document.createElement("li");
      li.textContent = prof.name;
      resultsList.appendChild(li);
    }
  });

  // Näytä narratiivit vastausten perusteella
  let hasNarratives = false;
  Object.entries(answers).forEach(([qid, opt]) => {
    const narrative = narratives[qid]?.[opt] || "Ei sanallista arviota saatavilla.";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "• " + narrative;
    writtenSummary.appendChild(paragraph);
    hasNarratives = true;
  });

  // Näytä sanallinen arvio, jos narratiiveja on
  if (hasNarratives) {
    writtenSummaryContainer.style.display = "block";
  }

  document.getElementById("resultsContainer").style.display = "block";
}