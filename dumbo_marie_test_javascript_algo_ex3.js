// HNInstitut : Test JavaScript - Exercice 3
// Auteur : Dumbo Marie


// -------------- Environnement --------------
import { array_number_erreur } from './javascript_test_je1.js';
import { to_check } from './dumbo_marie_test_javascript_algo_ex1.js';
import { check_sudoku, test_duplicate } from './dumbo_marie_test_javascript_algo_ex2.js';


// -------------- Exercice 3 --------------
// ------ Fonctions annexes ------

function reversedDim(t_dim2){
  let t_dim1 = new Array(9);
  for (let i in t_dim2){
    t_dim1[i] = t_dim2[i].join(' ');
  }
  return t_dim1;
}


function create_col(t_dim2, i){
  let col = [];
  for (let j = 0; j < 9; j++){
    col.push(t_dim2[j][i]);
  }
  return col;
}

function create_reg(t_dim2, i){
  let reg = [];
  for (let j = 0; j < 9; j++){
    col.push(t_dim2[j][i]);
  }
  return col;
}


// ------ 1 ------

function error_ligne(t_dim2){
  let t_dim1 = reversedDim(t_dim2);
  let resultat = check_sudoku(t_dim1);
  if(typeof resultat[1] === 'number'){
    return ["Ligne "+ (resultat[1]+1)+ " incorrect", t_dim2[resultat[1]-1],resultat[1]]
  } else {
    return resultat[1];
  }
}

document.getElementById("errligne").innerHTML = error_ligne(array_number_erreur);


// ------ 2 ------

function error_col(t_dim2){
  let t_dim1 = reversedDim(t_dim2);
  let resultat = check_sudoku(t_dim1);
  if(typeof resultat[1] === 'number'){
    let index1 =  t_dim2[resultat[1]].indexOf(resultat[2]);
    let index2 =  t_dim2[resultat[1]].lastIndexOf(resultat[2]);
    let col1 = create_col(t_dim2,index1);
    let col2 = create_col(t_dim2,index2);
    let checkDuplication1 = test_duplicate(col1);
    let checkDuplication2 = test_duplicate(col2);
    if (!checkDuplication1[0]){
      return ["Colonne "+ (index1+1) + " incorrect",create_col(t_dim2,index1),index1]
    } else {
      return ["Colonne "+ (index2+1) + " incorrect",create_col(t_dim2,index2), index2]
    }
  }
}

document.getElementById("errcol").innerHTML = error_col(array_number_erreur);



// ------ 3 ------

function error_reg(t_dim2, row, col){
  let i = [];
  let j = [];
  let reg = null;
  if (row < 3){
    j = [0,1,2];
    if (col < 3){
      i = [0,1,2];
      reg=1;
    } else if (col < 6){
      i = [3,4,5];
      reg=4;
    } else {
    i = [6,7,8];
      reg=7;
    }

  } else if (row < 6){
    j = [3,4,5];
    if (col < 3){
      i = [0,1,2];
      reg=2;
    } else if (col < 6){
      i = [3,4,5];
      reg=5;
    } else {
      i = [6,7,8];
      reg=8;
    }

  } else {
    j = [6,7,8];
    if (col < 3){
      i = [0,1,2];
      reg=3;
    } else if (col < 6){
      i = [3,4,5];
      reg=6;
    } else {
      i = [6,7,8];
      reg=9;
    }
  }


  let val_reg = [];
  j.map(valj =>
    i.map(vali =>
      val_reg.push(t_dim2[valj][vali])))
  return ["Region "+ reg+" incorrect", val_reg];
}

document.getElementById("errreg").innerHTML = error_reg(array_number_erreur);


// ------ 4 ------

function htmlresult(tableau){
  let htmlTable = "<table border='1|1'><tr><td>"+ tableau[0]+"</td>";
  for (let i in tableau[1]){
        htmlTable+="<td>"+ tableau[1][i] +"</td>";
      }
  htmlTable+="</tr></table>";
  return htmlTable;
}

document.getElementById("tableaul").innerHTML = htmlresult(error_ligne(array_number_erreur));
document.getElementById("tableauc").innerHTML = htmlresult(error_col(array_number_erreur));
document.getElementById("tableaur").innerHTML = htmlresult(error_reg(array_number_erreur));
