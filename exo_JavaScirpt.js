function rendu_glouton(somme, pieces_rendues, indice_monnaie) {

    const pieces=[100,50,20,10,5,2,1];
    if (somme == 0){
      return pieces_rendues;
    }
    if (somme < pieces[indice_monnaie]){
      return rendu_glouton(somme, pieces_rendues, indice_monnaie+1);
    }
    else{
      pieces_rendues.push(pieces[indice_monnaie]);
      return rendu_glouton(somme-pieces[indice_monnaie], pieces_rendues, indice_monnaie);
    }
  }
  
  console.log(rendu_glouton(68, [], 0)); 
  