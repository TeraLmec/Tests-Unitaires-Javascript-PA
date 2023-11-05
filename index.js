const express = require("express");
const app = express();
const addition = require("./s1/exercice1");
const soustraction = require("./s1/exercice2");
const multiplication = require("./s1/exercice3");
const division = require("./s1/exercice4");
const factorielle = require("./s1/exercice5");
const estPairOuImpair = require("./s1/exercice6");
const celsiusEnFahrenheit = require("./s1/exercice7");
const aireCercle = require("./s1/exercice8");
const estPalindrome = require("./s1/exercice9");
const pgcd = require("./s1/exercice10");

const dateIlYADixAns = require("./s2/exercice1");
const formaterDate = require("./s2/exercice2");
const differenceEnJours = require("./s2/exercice3");
const ajouterJours = require("./s2/exercice4");
const estAnneeBissextile = require("./s2/exercice5");
const premierJourDuMois = require("./s2/exercice6");
const dernierJourDuMois = require("./s2/exercice7");
const formaterDuree = require("./s2/exercice8");
const chevauchementDates = require("./s2/exercice9");
const calculerAge = require("./s2/exercice10");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json([{ id: 1, name: "John Doe" }]);
});

app.post("/:param", (req, res) => {
  return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }

  let a = addition(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice2", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }

  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  let a = soustraction(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }

  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  let a = multiplication(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n2 == 0) {
    return res.status(404).json([
      {
        reponse:
          "Division par 0 impossible, veuillez choisir un nombre différent de 0",
      },
    ]);
  }

  let a = division(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice5", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }

  let a = factorielle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice6", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }

  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  let a = estPairOuImpair(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice7", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 <= -273.15) {
    return res
      .status(405)
      .json([
        { reponse: "Veuillez entrer une valeur au dessus ou égal de -273.15" },
      ]);
  }
  let a = celsiusEnFahrenheit(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice8", (req, res) => {
  const n1 = req.body.n1;
  if (n1 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (isNaN(n1)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (n1 == 0) {
    return res
      .status(406)
      .json([{ reponse: "Veuillez entrer un nombre non-nul positif" }]);
  }
  if (n1 < 0) {
    return res
      .status(407)
      .json([{ reponse: "Veuillez entrer un nombre strictement positif" }]);
  }
  let a = aireCercle(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice9", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res.status(408).json([{ reponse: "Veuillez entrer des mots" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (typeof n1 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des mots" }]);
  }
  let a = estPalindrome(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s1/exercice10", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 == 0 || n2 == 0) {
    return res
      .status(410)
      .json([{ reponse: "Veuillez entrer l'un des nombres différents de 0" }]);
  }
  let a = pgcd(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice1", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  const n3 = req.body.n3;

  if (n1 == undefined || n2 == undefined || n3 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null || n2 == null || n3 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 < 0 || n2 < 0 || n3 < 0) {
    return res
      .status(407)
      .json([{ reponse: "Veuillez entrer un nombre strictement positif" }]);
  }
  let a = dateIlYADixAns(n1, n2, n3);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice2", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  const n3 = req.body.n3;

  if (n1 == undefined || n2 == undefined || n3 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }

  if (n1 == null || n2 == null || n3 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }

  if (n1 < 0 || n2 < 0 || n3 < 0) {
    return res
      .status(407)
      .json([{ reponse: "Veuillez entrer un nombre strictement positif" }]);
  }
  let a = formaterDate(n1, n2, n3);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice3", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des strings" }]);
  }
  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (typeof n1 !== "string" || typeof n2 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = differenceEnJours(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice4", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des valeurs" }]);
  }
  if (n1 == null || n2 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (typeof n1 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = ajouterJours(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice5", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (isNaN(n1)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 < 0) {
    return res
      .status(407)
      .json([{ reponse: "Veuillez entrer un nombre strictement positif" }]);
  }
  let a = estAnneeBissextile(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice6", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res
      .status(401)
      .json([{ reponse: "Veuillez entrer une date valide" }]);
  }
  if (n1 == null) {
    return res
      .status(420)
      .json([{ reponse: "Veuillez entrer des valeurs différentes de 'null'" }]);
  }
  if (typeof n1 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = premierJourDuMois(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice7", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res
      .status(401)
      .json([{ reponse: "Veuillez entrer une date valide" }]);
  }

  if (typeof n1 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = dernierJourDuMois(n1);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice8", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;

  if (n1 == undefined || n2 == undefined) {
    return res.status(401).json([{ reponse: "Veuillez entrer des nombres" }]);
  }
  if (isNaN(n1) || isNaN(n2)) {
    return res
      .status(402)
      .json([{ reponse: "Veuillez entrer uniquement des nombres" }]);
  }
  if (n1 < 0 || n2 < 0) {
    return res
      .status(407)
      .json([{ reponse: "Veuillez entrer un nombre strictement positif" }]);
  }
  let a = formaterDuree(n1, n2);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice9", (req, res) => {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  const n3 = req.body.n3;
  const n4 = req.body.n4;

  if (
    n1 == undefined ||
    n2 == undefined ||
    n3 == undefined ||
    n4 == undefined
  ) {
    return res
      .status(401)
      .json([{ reponse: "Veuillez entrer des dates valides" }]);
  }
  if (
    typeof n1 !== "string" ||
    typeof n2 !== "string" ||
    typeof n3 !== "string" ||
    typeof n4 !== "string"
  ) {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = chevauchementDates(n1, n2, n3, n4);
  return res.json([{ reponse: a }]);
});

app.post("/s2/exercice10", (req, res) => {
  const n1 = req.body.n1;

  if (n1 == undefined) {
    return res
      .status(401)
      .json([{ reponse: "Veuillez entrer une date valide" }]);
  }
  if (typeof n1 !== "string") {
    return res
      .status(409)
      .json([{ reponse: "Veuillez entrer uniquement des strings" }]);
  }

  let a = (age = calculerAge(n1));
  return res.json([{ reponse: a }]);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app;
