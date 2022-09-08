// Diagonal^2 = Side^2 + Side^2
// semiperimeter = a+b+c/2
// Area triangulo escaleno = root(s(s-a)(s-b)(s-c))
// Circumference = Diametro * pi
// Area = Radio^2 * pi
// Diametro = Radio *2

function findDiagonal(num) {
    let side = num;
    return Math.sqrt(side ** 2 + side ** 2);
  }
  const sup = (side1, side2, side3) => {
    return (side1 + side2 + side3) / 2;
  };
  
  const triangleArea = (sp, side1, side2, side3) => {
    return sp * (sp - side1) * sp * (sp - side2) * sp * (sp - side3);
  };
  
  const circumferenceCircle = (radio) => {
    return radio * 2 * Math.PI;
  };
  
  const surfaceCircle = (radio) => {
    return radio ** 2 * Math.PI;
  };
  
  const iniciateProgram = () => {
    newProgram = prompt(
      `Welcome to mathematics solution. \n\n What Function do you want to execute? \n 1) Find the diagonal of a square? \n 2) Find the area of a scalene triangle? \n 3) Find the circumference and surface area of a circle? \n\n Press ESC to leave`
    );
    if (newProgram === "ESC") {
      alert("Bye Bye");
    } else if (
      newProgram !== "1" &&
      newProgram !== "2" &&
      newProgram !== "3" &&
      newProgram !== "ESC"
    ) {
      {
        alert("Your input was wrong, try it again");
        iniciateProgram();
      }
    } else {
      switch (newProgram) {
        case "1":
          let num = prompt(
            "Let's find the diagonal of a square, tell me which is the lenghts of the sides?"
          );
          alert("The diagonal of your square is " + findDiagonal(num).toFixed(3));
          iniciateProgram();
          break;
        case "2":
          let side1 = parseInt(
            prompt(
              "Let's find the area of a scalene triangle, tell me the lenght of the side number 1"
            )
          );
          let side2 = parseInt(prompt("Tell me the lenght of the side number 2"));
          let side3 = parseInt(prompt("Tell me the lenght of the side number 3"));
          let semiPerimeter = sup(side1, side2, side3);
          let root = triangleArea(semiPerimeter, side1, side2, side3);
          alert("The Area of the triangle is " + Math.sqrt(root).toFixed(3));
          iniciateProgram();
          break;
        case "3":
          let radio = parseInt(
            prompt(
              "Let's calculate the circumference and surface of the circle, tell me which is the radius so i can think"
            )
          );
          alert(
            "The circumference of the circle is: " +
              circumferenceCircle(radio).toFixed(3) +
              " CM"
          );
          alert(
            "The surface of the circle is: " +
              surfaceCircle(radio).toFixed(3) +
              " CM"
          );
          break;
      }
    }
  };
  
  // Write a JavaScript program that accepts two integers and displays the larger of the two
  
  const larger = () => {
    const z = prompt(
      "Now i will need yout to tell me two numbres, so i can give you the bigger one." +
        "\n" +
        "Introduce the first number:"
    );
    const x = prompt("Introduce the second number:");
    if (z > x) {
      alert("The bigger number is the first one " + z);
    } else if (z < x) {
      alert("The bigger number is the second one " + x);
    }
  };
  
  const typeNumber = () => {
    const number = parseInt(
      prompt(
        "Introduce a number so i tell you if it is an odd number or an even number "
      )
    );
    if (number % 2) {
      alert("This number: " + number + " is a odd number");
    } else {
      alert("This number: " + number + " is a even number");
    }
  };
  
  //! Main Javascript Project
  // Math.random return decimals numbers, with floor we make it integer
  
  const computerPlay = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const computerSelected = ["rock", "paper", "scissors"];
  
  // console.log(computerPlay(probar));
  
  // const playRound = (playerSelection, computerSelection){
  
  // }
  let ganoHombre = 0;
  let ganoMaquina = 0;
  let fueEmpate = 0;
  // const ganoHombre = hombre+1;
  // const ganoMaquina = maquina++;
  // const fueEmpate = empate++;
  
  const playGame = () => {
    const iniciateGame =
      prompt(`Hello, let's play Rock-Scissors-Paper against the machine. \n
    Press: \n
    1) Play
    2) Exit `);
    if (iniciateGame !== "1" && iniciateGame !== "2") {
      alert("You press the wrong key, please repeat the process");
      playGame();
    } else {
      switch (iniciateGame) {
        case "1":
          alert("You will play a 5 round game against the computer");
          for (let i = 1; i < 6; i++) {
            const playerSelection = prompt(
              `Round ${i} Fight! Choose your weapon: rock-paper-scissors`
            );
            const pcResult = computerPlay(computerSelected);
            if (pcResult == "scissors" && playerSelection == "rock") {
              alert(
                `You Win! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoHombre++;
            } else if (pcResult == "paper" && playerSelection == "scissors") {
              alert(
                `You Win! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoHombre++;
            } else if (pcResult == "rock" && playerSelection == "paper") {
              alert(
                `You Win! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoHombre++;
            } else if (pcResult == "rock" && playerSelection == "scissors") {
              alert(
                `You Lose! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoMaquina++;
            } else if (pcResult == "scissors" && playerSelection == "paper") {
              alert(
                `You Lose! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoMaquina++;
            } else if (pcResult == "paper" && playerSelection == "rock") {
              alert(
                `You Lose! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              ganoMaquina++;
            } else {
              alert(
                `You Tye! You choose ${playerSelection} and the PC choose ${pcResult}`
              );
              fueEmpate++;
            }
          }
          if (ganoHombre > ganoMaquina) {
            alert(
              `After 5 dedides rounds we have a winner... \n TUM TUM TSSSSS TSSSS \n\n Human: with ${ganoHombre} points \n CPU: with ${ganoMaquina} points \n Tye rounds: ${fueEmpate} \n\n THE WINNER IS YOU!`
            );
          } else if (ganoHombre < ganoMaquina) {
            alert(
              `After 5 dedides rounds we have a winner... \n TUM TUM TSSSSS TSSSS \n\n Human: with ${ganoHombre} points \n CPU: with ${ganoMaquina} points \n Tye rounds: ${fueEmpate} \n\n THE WINNER IS THE CPU!`
            );
          } else if (fueEmpate == "5" || fueEmpate == "3" || fueEmpate == "1") {
            alert(
              `After 5 dedides rounds we have a winner... \n TUM TUM TSSSSS TSSSS \n\n Human: with ${ganoHombre} points \n CPU: with ${ganoMaquina} points \n Tye rounds: ${fueEmpate} \n\n THERE IS A TYE!`
            );
          }
  
          break;
      }
    }
  };
  
  // Functions
  // iniciateProgram();
  // larger();
  // typeNumber();
  // playGame();
  
  // game.addEventListener('click', playGame())
  const game = document
    .getElementById("game")
    .addEventListener("click", playGame);
  const math = document
    .getElementById("math")
    .addEventListener("click", iniciateProgram);
  const bigger = document
    .getElementById("bigger")
    .addEventListener("click", larger, typeNumber);
  const odd = document
    .getElementById("odd")
    .addEventListener("click", typeNumber);