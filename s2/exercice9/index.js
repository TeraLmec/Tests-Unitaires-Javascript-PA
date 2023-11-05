// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
  const dateDebut1 = new Date(debut1);
  const dateFin1 = new Date(fin1);
  const dateDebut2 = new Date(debut2);
  const dateFin2 = new Date(fin2);
  const chevauchement = dateDebut1 <= dateFin2 && dateFin1 >= dateDebut2;

  return chevauchement;
};
