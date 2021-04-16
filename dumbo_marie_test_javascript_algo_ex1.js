// HNInstitut : Test JavaScript - Exercice 1
// Auteur : Dumbo Marie


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


// --------- 2 ---------

function fill_table(t_dim1){
  for (let i in t_dim1){
    to_verify[i] = t_dim1[i].split(' ');
  }
  return to_verify;
}


// --------- 3 ---------

function display_table(t_dim2){
  let htmlTable = "<table border='1|1'>";
  for (let i in t_dim2) {
      htmlTable+="<tr>";

      for (let j in t_dim2[i]){
        htmlTable+="<td>"+ t_dim2[i][j] +"</td>";
      }

      htmlTable+="</tr>";
  }
  htmlTable+="</table>";
  
  document.getElementById("sudoku").innerHTML =htmlTable;
}
