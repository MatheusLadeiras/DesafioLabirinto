let solution = []; 
let total, columns, rows;

function BacktrackerMazeGenerator() {
    RestoreMaze();
    let stack = [1];
    let visited = [1];
    do {
        let possibilities = [];
        let [top, bot, right, left] = Array(4).fill(0);
        if (stack[stack.length-1] > rows) {
            top = stack[stack.length-1] - rows;
            if(visited.includes(top) == false) {possibilities.push(top);}
        };
        if (stack[stack.length-1] < (total-rows+1)) {
            bot = stack[stack.length-1] + rows;
            if(visited.includes(bot) == false) {
                possibilities.push(bot);
            }
        };
        if (stack[stack.length-1] % rows !== 0) {
            right = stack[stack.length-1] + 1;
            if(visited.includes(right) == false) {possibilities.push(right);}
        };
        if ((stack[stack.length-1] - 1) % rows !== 0) {
            left = stack[stack.length-1] - 1;
            if(visited.includes(left) == false) {possibilities.push(left);}
        };
        console.log(possibilities);
        if (possibilities.length != 0) {
            let nextStep = possibilities[Math.floor(Math.random()*possibilities.length)];
            console.log("possibilities:"+possibilities);
            console.log("NextStep:"+nextStep);
            switch (nextStep) {
                case top:
                    console.log("Top");
                    document.getElementById(stack[stack.length-1].toString()).style.borderTop="0px";
                    document.getElementById(nextStep.toString()).style.borderBottom="0px";
                    break;
                case bot:
                    console.log("Bot");
                    document.getElementById(stack[stack.length-1].toString()).style.borderBottom="0px";
                    document.getElementById(nextStep.toString()).style.borderTop="0px";
                    break;
                case right:
                    console.log("Right");
                    document.getElementById(stack[stack.length-1].toString()).style.borderRight="0px";
                    document.getElementById(nextStep.toString()).style.borderLeft="0px";
                    break;
                case left:
                    console.log("Left");
                    document.getElementById(stack[stack.length-1].toString()).style.borderLeft="0px";
                    document.getElementById(nextStep.toString()).style.borderRight="0px";
                    break;
            }
            stack.push(nextStep);
            visited.push(nextStep);
            if(visited.includes(total) != true) {
                solution.push(nextStep);
            }
        } else {
            let pop = stack.pop();
            if(visited.includes(total) != true) {
                solution.pop();
            }
        }
    } while(stack.length != 0)
        console.log(solution);
}

function RestoreMaze() {
    for(let i = 1; i < total+1; i++) {
        document.getElementById(i).style.border="solid 2px";
        if(i != 1 && i != total) {document.getElementById(i).style.background="rgba(255, 255, 255, 0.8)";}
    }
    solution = []; 
}

function SolutionShowcase() {
    for(i = 0; i < solution.length; i++) {
        document.getElementById(solution[i]).style.background="blue";
    }
}

function WilsonMazeGenerator() {
    RestoreMaze();
    let visited = [];
    let notVisited = [];
    for(let i = 1; i < (total+1); i++) {
        notVisited.push(i);
    }
    let randCell;
    while (visited.length < total) {
        console.log("Novo caminho");
        if(visited.length == 0) {
            randCell = notVisited[Math.floor(Math.random()*notVisited.length)];
            console.log("randCell:"+randCell);
            visited.push(randCell);
            notVisited.splice(notVisited.indexOf(randCell), 1);
        }
        let start = notVisited[Math.floor(Math.random()*notVisited.length)];
        notVisited.splice(notVisited.indexOf(start), 1);
        let path = [start];
        let directions = [];
        do {
            let [top, bot, right, left] = Array(4).fill(0);
            possibilities = [];
            if (path[path.length-1] > rows) {
                top = path[path.length-1] - rows;
                possibilities.push(top);
            };
            if (path[path.length-1] < (total-rows+1)) {
                bot = path[path.length-1] + rows;
                possibilities.push(bot);
            };
            if (path[path.length-1] % rows !== 0) {
                right = path[path.length-1] + 1;
                possibilities.push(right);
            };
            if ((path[path.length-1] - 1) % rows !== 0) {
                left = path[path.length-1] - 1;
                possibilities.push(left);
            };
            console.log("possibilities:"+possibilities);
            console.log("Visited:"+visited);
            nextStep = possibilities[Math.floor(Math.random()*possibilities.length)];
            path.push(nextStep);
            switch (nextStep) {
                case top:
                    directions.push(1); break;
                case bot:
                    directions.push(2); break;
                case right:
                    directions.push(3); break;
                case left:
                    directions.push(4); break;
                }
        } while (visited.includes(nextStep) == false) 
        //limpar o path
        for(let i = 0; i < path.length; i++) {
            let step = path[i];  
            let last = path.lastIndexOf(step);
            if(last != i) {
                let dif = last - i;
                path.splice(i, dif); 
                directions.splice(i, dif);
            }  
        }
        console.log("Filtered path: "+path);
        console.log("Filtered directions: "+directions);
        //Criar os caminhos
        for(let i = 0; i < path.length-1; i++) {
            //console.log(i)
            let step = path[i]; 
            //console.log(step);
            let nextStep = path[i+1]; 
            let direction = directions[i];
            console.log(direction);
            switch (direction) {
                case 1:
                    console.log("Top");
                    document.getElementById(step.toString()).style.borderTop="0px";
                    document.getElementById(nextStep.toString()).style.borderBottom="0px";
                    break;
                case 2:
                    console.log("Bot");
                    document.getElementById(step.toString()).style.borderBottom="0px";
                    document.getElementById(nextStep.toString()).style.borderTop="0px";
                    break;
                case 3:
                    console.log("Right");
                    document.getElementById(step.toString()).style.borderRight="0px";
                    document.getElementById(nextStep.toString()).style.borderLeft="0px";
                    break;
                case 4:
                    console.log("Left");
                    document.getElementById(step.toString()).style.borderLeft="0px";
                    document.getElementById(nextStep.toString()).style.borderRight="0px";
                    break;
            }
        }  
        for(let i = 0; i < path.length-1; i++) {
            let cell = path[i]; 
            if(visited.includes(cell) == false) {visited.push(cell);}
            if(notVisited.includes(cell) == true) {notVisited.splice(notVisited.indexOf(cell), 1);} 
        }
    console.log(visited);
    console.log(notVisited.length);
    } 
    WilsonMazeSolution();
    console.log(solution);
}

function WilsonMazeSolution() {
    let stack = [1];
    let visited = [1];
    do {
        //Está funcionando mas ele dá pop e fica null o primeiro elemento
        //Ou estava ignorando a segunda regra, com &&, a segunda regra nunca funciona
        console.log(stack[stack.length-1]);
        let possibilities = [];
        let [top, bot, right, left] = Array(4).fill(0);    
        if (stack[stack.length-1] > rows) {
            top = stack[stack.length-1] - rows;
            if(visited.includes(top) == false && document.getElementById(stack[stack.length-1]).style.borderTop == "0px") {possibilities.push(top);}
        };
        if (stack[stack.length-1] < (total-rows+1)) {
            bot = stack[stack.length-1] + rows;
            if(visited.includes(bot) == false && document.getElementById(stack[stack.length-1]).style.borderBottom == "0px") { possibilities.push(bot); }
        };
        if (stack[stack.length-1] % rows !== 0) {
            right = stack[stack.length-1] + 1;
            if(visited.includes(right) == false && document.getElementById(stack[stack.length-1]).style.borderRight == "0px") {possibilities.push(right);}
        };
        if ((stack[stack.length-1] - 1) % rows !== 0) {
            left = stack[stack.length-1] - 1;
            if(visited.includes(left) == false && document.getElementById(stack[stack.length-1]).style.borderLeft == "0px") {possibilities.push(left);}
        };
        console.log(possibilities);
        if (possibilities.length != 0) {
            let nextStep = possibilities[Math.floor(Math.random()*possibilities.length)];
            console.log("possibilities:"+possibilities);
            console.log("NextStep:"+nextStep);
            stack.push(nextStep);
            visited.push(nextStep);
            //solution.push(nextStep);
            if(visited.includes(total) != true) {
                solution.push(nextStep);
            }
        } else {
            let pop = stack.pop();
            //solution.pop();
            if(visited.includes(total) != true) {
                solution.pop();
            }
        }
    } while(!stack.includes(total))
}

//Código adaptado de emkey08, https://jsfiddle.net/emkey08/zgvtjc51
function setInputFilter(textbox, inputFilter, errMsg) {
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value.
          if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 0) {
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
          
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        }
        else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one.
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
        else {
          // Rejected value: nothing to restore.
          this.value = "";
        }
      });
    });
  }

for(i = 0; i < document.getElementsByClassName("MazeSize").length; i++) {
    setInputFilter(document.getElementsByClassName("MazeSize")[i], function(value) {
        return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 32 && parseInt(value) >= 3);
    }, "Must be between 3 and 32");
}

//Analisar depois a possibilidade de substituir sobre variáveis globais
//https://blog.devgenius.io/passing-data-variable-between-functions-in-javascript-8a3a10abc169
/*
function passTotal (total) {
    console.log("Total:"+total);
    return total;
}

function passColumns (columns) {
    console.log("Columns:"+columns);
    return columns;
}

function passRows (rows) {
    console.log("Rows:"+rows);
    return rows;
}
*/
function ResizeMaze() {
    columns = Number(document.getElementById("columns").value);
    rows = Number(document.getElementById("rows").value);
    /*columns = document.getElementById("columns").value;
    rows = document.getElementById("rows").value;*/
    total = columns * rows;
    let maze = document.getElementsByClassName("grid-container")[0];
    let size = '';
    for(i = 0; i < rows; i++) { size += 'auto ';}
    console.log("size: "+size);
    maze.style.gridTemplateColumns = size;
    maze.innerHTML = '';
    /*
    for(i = 0; i < total; i++) {
        maze.innerHTML += '<div class="grid-item" id="'+(i+1)+'">'+(i+1)+'</div>';
    }*/
    for(i = 1; i < total; i++) {
        maze.innerHTML += '<div class="grid-item" id="'+(i)+'">'+(i)+'</div>';
    }
    maze.innerHTML += '<div class="grid-item last" id="'+(total)+'">'+(total)+'</div>';
    /*
    passTotal(total);
    passColumns(columns);
    passRows(rows);*/
    console.log("Total:"+total);
    console.log("Columns:"+columns);
    console.log("Rows:"+rows);
}