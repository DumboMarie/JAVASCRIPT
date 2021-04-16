// HNInstitut : Test JavaScript - Exercice 2
// Auteur : Dumbo Marie


// -------------- Exercice 2 --------------
// -------- Fonctions annexes --------

function test_duplicate(l_chiffres_ori){
  let l_chiffres_verif = new Set();
  let elem = 0;
  do{
    l_chiffres_verif.add(l_chiffres_ori[elem]);
    l_chiffres_ori.shift();
    if (l_chiffres_verif.has(l_chiffres_ori[elem])){
      return [false, l_chiffres_ori[elem]];
    }
  } while (l_chiffres_ori.length !== 0);
  return [true,,];
}


// -------- 1 et 2 --------

function check_sudoku(tableau){
  const regex = /(\d\s){8}\d/;

  if(tableau.length !== 9){
    return [false, "Cette grille n'est pas un sudoku"];
  }
  for (let i in tableau ){
    let isnum = regex.test(tableau[i]);
    if (isnum){
      let checkDuplication = test_duplicate(tableau[i].split(' '))
      if (!checkDuplication[0]){
        return [false, parseInt(i),checkDuplication[1]];
      }
    } else {
      return [false, "Erreur : Pas de chiffre dans les sudoku"];
    }
  }
  return [true,'Bravo ! Votre sudoku est correct'];
}
