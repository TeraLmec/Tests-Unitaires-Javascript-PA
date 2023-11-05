// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
  const dateObj = new Date(date);

  dateObj.setDate(dateObj.getDate() + jours);

  const nouvelleDate = dateObj.toISOString().split("T")[0];

  return nouvelleDate;
};
