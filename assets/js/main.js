// To-Do List:
// 1. Value auslesen, welche ich anklick
// 2. Output 3 Stück festlegen
// 3. Zufallsgenerator
// 4. Vergleich mit if else
// 5. Verzögerte Ausgabe von den drei Outputfeldern
// 6. funktion mit restart game

// !Erste Lösung (bisschen lang, aber funktioniert super)
// *outputs
// const outputYouChoose = document.querySelector(".youchoose");
// const outputcpuChoose = document.querySelector(".cpuchoose");
// const outputResult = document.querySelector(".result");

// *Funktion für Schere
// function scissors() {
//   outputYouChoose.innerHTML = "You choose: scissors";
//   const cpu = Math.round(Math.random() * 2);

//   let scissors = 0;

//   if (scissors === cpu) {
//     outputcpuChoose.innerHTML = "CPU choose: scissors";
//     outputResult.innerHTML = " Result: Draw";
//   } else if (cpu === 1) {
//     outputcpuChoose.innerHTML = "CPU choose:  rock";
//     outputResult.innerHTML = " Result: You loose!";
//   } else {
//     outputcpuChoose.innerHTML = "CPU choose: paper";
//     outputResult.innerHTML = "Result: You win!";
//   }
// }

// *Funktion für Stein
// function  rock() {
//   outputYouChoose.innerHTML = "You choose:  rock";
//   const cpu = Math.round(Math.random() * 2);

//   let  rock = 0;

//   if ( rock === cpu) {
//     outputcpuChoose.innerHTML = "CPU choose: rock";
//     outputResult.innerHTML = "Result: Draw";
//   } else if (cpu === 1) {
//     outputcpuChoose.innerHTML = "CPU choose: scissors";
//     outputResult.innerHTML = "Result: You win!";
//   } else {
//     outputcpuChoose.innerHTML = "CPU choose: paper";
//     outputResult.innerHTML = "Result: You loose!";
//   }
// }

// *Funktion für Papier
// function paper() {
//   outputYouChoose.innerHTML = "You choose: paper";
//   const cpu = Math.round(Math.random() * 2);

//   let paper = 0;

//   if (paper === cpu) {
//     outputcpuChoose.innerHTML = "CPU choose: paper";
//     outputResult.innerHTML = "Result: Draw";
//   } else if (cpu === 1) {
//     outputcpuChoose.innerHTML = "CPU choose: rock";
//     outputResult.innerHTML = "Result: You win!";
//   } else {
//     outputcpuChoose.innerHTML = "CPU choose: scissors";
//     outputResult.innerHTML = "Result: You loose!";
//   }
// }

// *Funktion für Restart Game
// function restart() {
//   outputYouChoose.innerHTML = " ";
//   outputcpuChoose.innerHTML = " ";
//   outputResult.innerHTML = " ";
// }

// !Zweite Lösung ( eine Funktion statt )
// // *outputs
// const outputYouChoose = document.querySelector(".youchoose");
// const outputCpuChoose = document.querySelector(".cpuchoose");
// const outputResult = document.querySelector(".result");

// // *values
// const inputSchere = document.querySelector("#schere").id;
// const inputStein = document.querySelector("#stein").id;
// const inputPapier = document.querySelector("#papier").id;

// const zeichen = ["schere", "stein", "papier"];

// // *Funktion für Spiel
// function choose(myChoice) {
//   const cpuChoice = zeichen[Math.round(Math.random() * 2)];

//   outputYouChoose.innerHTML = `You choose: ${myChoice}`;
//   outputCpuChoose.innerHTML = `CPU choose: ${cpuChoice}`;

//   if (myChoice === cpuChoice) {
//     outputResult.innerHTML = "Result: Draw";
//   } else if (
//     (myChoice === "schere" && cpuChoice === "papier") ||
//     (myChoice === "papier" && cpuChoice === "stein") ||
//     (myChoice === "stein" && cpuChoice === "schere")
//   ) {
//     outputResult.innerHTML = "Result: You win!";
//   } else {
//     outputResult.innerHTML = "Result: You loose!";
//   }
// }

// // *Funktion für Restart Game
// function restart() {
//   outputYouChoose.innerHTML = " ";
//   outputCpuChoose.innerHTML = " ";
//   outputResult.innerHTML = " ";
// }

// !Dritte Lösung (ohne values auslesen, weil ich in den Parameter (ins onclick im html)
// ! schon direkt die Zeichen reingeschrieben habe statt Variable)
// *outputs
const outputYouChoose = document.querySelector(".youchoose");
const outputCpuChoose = document.querySelector(".cpuchoose");
const outputResult = document.querySelector(".result");

const zeichen = ["schere", "stein", "papier"];

// *Funktion für Spiel
function choose(myChoice) {
  const cpuChoice = zeichen[Math.round(Math.random() * 2)];

  outputYouChoose.innerHTML = `You choose: ${myChoice}`;
  outputCpuChoose.innerHTML = `CPU choose: ${cpuChoice}`;

  if (myChoice === cpuChoice) {
    outputResult.innerHTML = "Result: Draw";
  } else if (
    (myChoice === "schere" && cpuChoice === "papier") ||
    (myChoice === "papier" && cpuChoice === "stein") ||
    (myChoice === "stein" && cpuChoice === "schere")
  ) {
    outputResult.innerHTML = "Result: You win!";
  } else {
    outputResult.innerHTML = "Result: You loose!";
  }
}

// *Funktion für Restart Game
function restart() {
  outputYouChoose.innerHTML = " ";
  outputCpuChoose.innerHTML = " ";
  outputResult.innerHTML = " ";

  console.log(restart);
}
