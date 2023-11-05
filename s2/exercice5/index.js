// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
  const divisiblePar4 = annee % 4 === 0;

  const divisiblePar100 = annee % 100 === 0;

  const divisiblePar400 = annee % 400 === 0;

  return (divisiblePar4 && !divisiblePar100) || divisiblePar400;
};
