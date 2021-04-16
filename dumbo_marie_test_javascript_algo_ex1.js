// HNInstitut : Test JavaScript - Exercice 1
// Auteur : Dumbo Marie

// -------------- Environnement --------------
import { array_number } from './javascript_test_je1.js';


// -------------- Exercice 1 --------------
// --------- 1 ---------

var to_verify = new Array(9);
to_verify[0]= new Array(9);
to_verify[1]= new Array(9);
to_verify[2]= new Array(9);
to_verify[3]= new Array(9);
to_verify[4]= new Array(9);
to_verify[5]= new Array(9);
to_verify[6]= new Array(9);
to_verify[7]= new Array(9);
to_verify[8]= new Array(9);

document.getElementById("to_verif").innerHTML = to_verify;
document.getElementById("to_verif0").innerHTML = to_verify[0];


// --------- 2 ---------

function fill_table(t_dim1 = array_number){
  for (let i in t_dim1){
    to_verify[i] = t_dim1[i].split(' ');
  }
  document.getElementById("filled").innerHTML = to_verify;
  document.getElementById("filled0").innerHTML = to_verify[0];
  return to_verify;
}


// --------- 3 ---------

var to_verify_filled = fill_table(array_number);


function display_table(t_dim2 = to_verify_filled){
  let htmlTable = "<table border='1|1'>";
  for (let i in t_dim2) {
      htmlTable+="<tr>";

      for (let j in t_dim2[i]){
        htmlTable+="<td>"+ t_dim2[i][j] +"</td>";
      }

      htmlTable+="</tr>";
  }
  htmlTable+="</table>";
  return htmlTable;
}

var to_check = display_table(to_verify_filled);
document.getElementById("tableau").innerHTML = to_check;


// -------------- Exportation --------------
export { to_verify_filled as to_check };
