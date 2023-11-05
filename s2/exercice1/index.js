// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns(jj, mm, aaaa) {
  const dateActuelle = new Date(aaaa, mm - 1, jj);
  /*
  mm - 1 car les utilisateurs entreront un chiffres entre 1-12,
  les mois sont indexées entre 0-11
  */

  dateActuelle.setFullYear(aaaa - 10);

  const jourIlYADixAns = dateActuelle.getDate();
  const moisIlYADixAns = dateActuelle.getMonth() + 1;
  /*
  dateActuelle.getMonth() + 1 pour afficher à l'utilisateur
  */
  const anneeIlYADixAns = dateActuelle.getFullYear();

  return `${jourIlYADixAns}/${moisIlYADixAns}/${anneeIlYADixAns}`;
};
