let size = 8;
let rowLength = size + 1;
let boardArea = size * rowLength;
let output = "";

for (let counter = 1; counter < boardArea; counter++) {
  if (counter % rowLength == 0) {
    output += "\n";
  } else if (counter % 2 == 1) {
    output += " ";
  } else if (counter % 2 == 0) {
    output += "#";
  }
}

console.log(output);
