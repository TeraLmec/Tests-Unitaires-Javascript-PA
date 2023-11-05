const request = require("supertest");
const app = require("./index");

//Saison 1
describe("GET /", () => {
  test("Test 1", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
        done();
      });
  });
});

describe("POST /:param", () => {
  test("Test 1/2", (done) => {
    request(app)
      .post("/1")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ error: false, num: "1" }]);
        done();
      });
  });
});
/*
Tests_Exo_1
*/
describe("POST /s1/exercice1", () => {
  test("Test l'opération d'addition", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 2,
        n2: 1,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 3 }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: 2,
        n2: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice1")
      .send({
        n1: "arthur",
        n2: 2,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_2
*/
describe("POST /s1/exercice2", () => {
  test("Test de l'opération de soustraction", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 9,
        n2: 1,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 8 }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: 2,
        n2: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice2")
      .send({
        n1: "arthur",
        n2: 2,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_3
*/
describe("POST /s1/exercice3", () => {
  test("Test de l'opération de multiplication", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 4,
        n2: 4,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 16 }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: 2,
        n2: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice3")
      .send({
        n1: "arthur",
        n2: 2,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_4
*/
describe("POST /s1/exercice4", () => {
  test("Test de l'opération de division", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 15,
        n2: 3,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 5 }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 2,
        n2: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: "arthur",
        n2: 2,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n2 = 0", (done) => {
    request(app)
      .post("/s1/exercice4")
      .send({
        n1: 15,
        n2: 0,
      })
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            reponse:
              "Division par 0 impossible, veuillez choisir un nombre différent de 0",
          },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_5
*/
describe("POST /s1/exercice5", () => {
  test("Test de 1!", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: 1,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 1 }]);
        done();
      });
  });
  test("Test de 0!", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: 0,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 1 }]);
        done();
      });
  });
  test("Test du factorielle d'un nombre", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 120 }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice5")
      .send({
        n1: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_6
*/
describe("POST /s1/exercice6", () => {
  test("Test de la fonction de parité (pair)", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: 6,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "pair" }]);
        done();
      });
  });
  test("Test de la fonction de parité (impair)", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: 7,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "impair" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice6")
      .send({
        n1: "arthur",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_7
*/
describe("POST /s1/exercice7", () => {
  test("Test de la fonction de conversion des degrés", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: 20,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 68 }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est en dessous du 0 absolue", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: -273.16,
      })
      .expect(405)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            reponse: "Veuillez entrer une valeur au dessus ou égal de -273.15",
          },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice7")
      .send({
        n1: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_8
*/
describe("POST /s1/exercice8", () => {
  test("Test de la fonction de calcul de l'air du cercle", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: 20,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 1256.6370614359173 }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 = 0", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: 0,
      })
      .expect(406)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre non-nul positif" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 < 0", (done) => {
    request(app)
      .post("/s1/exercice8")
      .send({
        n1: -10,
      })
      .expect(407)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre strictement positif" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_9
*/
describe("POST /s1/exercice9", () => {
  test("Test de la fonction de palindrome (true, 1 mot)", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "ressasser",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Test de la fonction de palindrome (false, 1 mot)", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "pierre",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: false }]);
        done();
      });
  });
  test("Test de la fonction de palindrome (true, 0 mot)", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Test de la fonction de palindrome (true, groupe de mots + char spécial)", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "Ressasser , ressasseR",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Test de la fonction de palindrome (true, nombre)", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: "123321",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: undefined,
      })
      .expect(408)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des mots" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 n'est pas une chaîne de caractères", (done) => {
    request(app)
      .post("/s1/exercice9")
      .send({
        n1: 1111,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des mots" },
        ]);
        done();
      });
  });
});

/*
Tests_Exo_10
*/
describe("POST /s1/exercice10", () => {
  test("Test de la fonction pgcd", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 30,
        n2: 45,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 15 }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 2,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: undefined,
        n2: 2,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 2,
        n2: "pierre",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: "arthur",
        n2: 2,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 et n2 sont = 0", (done) => {
    request(app)
      .post("/s1/exercice10")
      .send({
        n1: 0,
        n2: 0,
      })
      .expect(410)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer l'un des nombres différents de 0" },
        ]);
        done();
      });
  });
});

//Saison 2

/*
Tests_Exo_1
*/
describe("POST /s2/exercice1", () => {
  test("Test de la fonction dateIlYADixAns", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: 5,
        n2: 11,
        n3: 2023,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: `5/11/2013` }]);
        done();
      });
  });
  test("Renvoie une erreur si n est < 0", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: -120,
        n2: -11,
        n3: -2023,
      })
      .expect(407)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre strictement positif" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n3 est undefined", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: 2,
        n2: 2,
        n3: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: 2,
        n2: undefined,
        n3: 2000,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: undefined,
        n2: 2,
        n3: 2000,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n3 est un mot", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: 2,
        n2: 2,
        n3: "pierrearthur",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: 2,
        n2: "pierre",
        n3: 2000,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s2/exercice1")
      .send({
        n1: "arthur",
        n2: 2,
        n3: 2000,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice2", () => {
  test("Test de la fonction formaterDate", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: 5,
        n2: 11,
        n3: 2023,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: `5/11/2023` }]);
        done();
      });
  });
  test("Renvoie une erreur si n < 0", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: -120,
        n2: -11,
        n3: -2023,
      })
      .expect(407)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre strictement positif" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n3 est undefined", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: 2,
        n2: 2,
        n3: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: 2,
        n2: undefined,
        n3: 2000,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: undefined,
        n2: 2,
        n3: 2000,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n3 est un mot", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: 2,
        n2: 2,
        n3: "pierrearthur",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: 2,
        n2: "pierre",
        n3: 2000,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s2/exercice2")
      .send({
        n1: "arthur",
        n2: 2,
        n3: 2000,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice3", () => {
  test("Test de la fonction differenceEnJours", (done) => {
    request(app)
      .post("/s2/exercice3")
      .send({
        n1: "2023-11-01",
        n2: "2023-11-05",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 4 }]);
        done();
      });
  });
  test("Renvoie une erreur si n est un nombre", (done) => {
    request(app)
      .post("/s2/exercice3")
      .send({
        n1: 1,
        n2: 2,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice3")
      .send({
        n1: undefined,
        n2: "2023-11-05",
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des strings" }]);
        done();
      });
  });
});

describe("POST /s2/exercice4", () => {
  test("Test de la fonction ajouterJours", (done) => {
    request(app)
      .post("/s2/exercice4")
      .send({
        n1: "2023-11-01",
        n2: 5,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-06" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice4")
      .send({
        n1: undefined,
        n2: 5,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des valeurs" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s2/exercice4")
      .send({
        n1: "2023-11-01",
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des valeurs" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un nombre", (done) => {
    request(app)
      .post("/s2/exercice4")
      .send({
        n1: 5,
        n2: 5,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice5", () => {
  test("Test de la fonction estAnneeBissextile (false)", (done) => {
    request(app)
      .post("/s2/exercice5")
      .send({
        n1: 2023,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: false }]);
        done();
      });
  });
  test("Test de la fonction estAnneeBissextile (true)", (done) => {
    request(app)
      .post("/s2/exercice5")
      .send({
        n1: 2012,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 < 0", (done) => {
    request(app)
      .post("/s2/exercice5")
      .send({
        n1: -120,
      })
      .expect(407)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre strictement positif" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice5")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s2/exercice5")
      .send({
        n1: "pierrearthur",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice6", () => {
  test("Test de la fonction premierJourDuMois", (done) => {
    request(app)
      .post("/s2/exercice6")
      .send({
        n1: "2023-11-15",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-01" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un nombre", (done) => {
    request(app)
      .post("/s2/exercice6")
      .send({
        n1: 20,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice6")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer une date valide" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice7", () => {
  test("Test de la fonction dernierJourDuMois", (done) => {
    request(app)
      .post("/s2/exercice7")
      .send({
        n1: "2023-11-15",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "2023-11-30" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un nombre", (done) => {
    request(app)
      .post("/s2/exercice7")
      .send({
        n1: 20,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice7")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer une date valide" },
        ]);
        done();
      });
  });
});
describe("POST /s2/exercice8", () => {
  test("Test de la fonction formaterDuree", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: 5,
        n2: 11,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "5:11" }]);
        done();
      });
  });
  test("Renvoie une erreur si n < 0", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: -120,
        n2: -130,
      })
      .expect(407)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer un nombre strictement positif" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: undefined,
        n2: 12,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un mot", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: "pierrearthur",
        n2: 12,
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est undefined", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: 12,
        n2: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer des nombres" }]);
        done();
      });
  });
  test("Renvoie une erreur si n2 est un mot", (done) => {
    request(app)
      .post("/s2/exercice8")
      .send({
        n1: 12,
        n2: "pierrearthur",
      })
      .expect(402)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des nombres" },
        ]);
        done();
      });
  });
});
describe("POST /s2/exercice9", () => {
  test("Test de la fonction chevauchementDates", (done) => {
    request(app)
      .post("/s2/exercice9")
      .send({
        n1: "2023-11-01",
        n2: "2023-11-10",
        n3: "2023-11-05",
        n4: "2023-11-15",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: true }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice9")
      .send({
        n1: undefined,
        n2: "2023-11-10",
        n3: "2023-11-05",
        n4: "2023-11-15",
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer des dates valides" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un nombre", (done) => {
    request(app)
      .post("/s2/exercice10")
      .send({
        n1: 12,
        n2: "2023-11-10",
        n3: "2023-11-05",
        n4: "2023-11-15",
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
});

describe("POST /s2/exercice10", () => {
  test("Test de la fonction calculerAge", (done) => {
    request(app)
      .post("/s2/exercice10")
      .send({
        n1: "1990-12-15",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([{ reponse: 32 }]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est undefined", (done) => {
    request(app)
      .post("/s2/exercice10")
      .send({
        n1: undefined,
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer une date valide" },
        ]);
        done();
      });
  });
  test("Renvoie une erreur si n1 est un nombre", (done) => {
    request(app)
      .post("/s2/exercice10")
      .send({
        n1: 12,
      })
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          { reponse: "Veuillez entrer uniquement des strings" },
        ]);
        done();
      });
  });
});
