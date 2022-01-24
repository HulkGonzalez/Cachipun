//Bienvenida y solicitud de partidas
let numGames = parseInt(prompt("Bienvenido a Piedra, Papel o Tijeras ¿Cuantas veces deseas jugar?"));
//Aclaracion del ciclo. Variable que almacena el nuemrod del juevo
while (numGames > 0) {
//Alternativas que damos para el juego
    let opcionUsuario = parseInt(
        prompt(`
          Elije una opcion :
          1 - Piedra ✊🏼
          2 - Papel ✋🏼
          3 - Tijeras ✌🏼
      `)
      );
      
      let opcionMaquina = Math.floor(Math.random() * (4 - 1)) + 1;
      console.log(opcionMaquina); 

     console.log(winner(opcionMaquina, opcionUsuario));
    numGames = numGames - 1;
}
//Funcion donde almacenamos datos segun alternativas que dan perdida y empagte para dejar todo lo demas como opcion  ganaste
function winner(machineChoice, userChoice) {
  if (machineChoice === 1 && userChoice === 3) {
    return "Perdiste";
  }
  if (machineChoice === 2 && userChoice === 1) {
    return "Perdiste";
  }
  if (machineChoice === 3 && userChoice === 1) {
    return "Perdiste";
  }

  if (machineChoice === userChoice) {
    return "Es un Empate";
  }
  return "Ganaste";
}
