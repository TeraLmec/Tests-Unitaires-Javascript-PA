// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
  const dateObj = new Date(date);

  dateObj.setMonth(dateObj.getMonth() + 1);
  dateObj.setDate(0);

  const dernierJour = dateObj.toISOString().split("T")[0];

  return dernierJour;
};
