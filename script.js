jQuery(document).ready(function ($) {

    let player1 = 'X'
    let player2 = 'O'
    let playerOn = player1
    let i = 0


    $("td").click(function () {     //fontion déclenchée au "clic"
        // +1 au compteur
        if ($(this).html() === "") { //verif case vide
            i++
            if (playerOn === player1) {          // verif joueur actif
                $(this).html("<strong>X</strong>")   // ecriture symbole joueur1

                playerOn = player2              // changement de joeur


            } else {
                $(this).html("<strong>O</strong>") //si j1 pas actif ecriture j2 
                playerOn = player1 // changement de joeur
            }


        } else {  // affichage message si case pas vide
            $("#occupied").append("<strong>Case occupée !!  ...  </strong>")
        }



        if (i >= 5) {  //condition a partir du 5eme coup
            let cells = document.querySelectorAll("td") //var pour definir les "td" comme éléments d'un tableau
            // for (cell of cells) {
                console.log(cells);
                if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[0].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[0].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML && cells[3].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML && cells[3].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[6].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[6].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML && cells[0].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML && cells[0].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML && cells[1].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML && cells[1].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML && cells[2].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML && cells[2].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML === "<strong>X</strong>") {
                    console.log("diagonale");
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                } else if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML === "<strong>O</strong>") {
                    $("#result").html("<strong>Joueur 2 gagne, Joueur 1 est nul</strong>")
                } else if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML === "<strong>X</strong>") {
                    $("#result").html("<strong>Joueur 1 gagne, Joueur 2 est nul</strong>")
                }
            // }





        } else if ( i=== 9) { 
            $("#result").html("<strong>Match nul, les deux joueurs sont nuls !</strong>")
            }













    })




});
 // let endGame = elem => { //fonction fin de partie
        //     let cells = document.querySelectorAll("td") //var pour definir les "td" comme éléments d'un tableau
        //     let vic = []
        //     for (cell of cells) {
        //         vic.push(cell.innerText)
        //     }

        //     let grid = {  //regroupement des possibilités de victoire dans une variable 
        //         row1: vic.slice(0, 3).toString(),
        //         row2: vic.slice(3, 6).toString(),
        //         row3: vic.slice(6, 9).toString(),
        //         col1: vic[0] + "," + vic[3] + "," + vic[6],
        //         col2: vic[1] + "," + vic[4] + "," + vic[7],
        //         col3: vic[2] + "," + vic[5] + "," + vic[8],
        //         diagDown: vic[0] + "," + vic[4] + "," + vic[8],
        //         diagUp: vic[6] + "," + vic[4] + "," + vic[2],
        //     }

        /**
         * let victory = {
         *  player1: 'x,x,x',
         *  player2: 'o,o,o'
         * } 
         * 
         * for(let try of grid){
         *  if(try === victory.player1){
         *      console.log("Victoire pour le joueur 1, le joueur 2 est nul")
         *  } else if (try === victory.player2){
         *      console.log("Victoire pour le joueur 2, le 1er est nul")
         *  }
         * }
         */



        // }
