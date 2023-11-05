// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
  const dateObj = new Date(date);

  dateObj.setDate(1);

  const premierJour = dateObj.toISOString().split("T")[0];

  return premierJour;
};
