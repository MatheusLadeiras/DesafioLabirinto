let solution = []; 

function BacktrackerMazeGenerator() {
    RestoreMaze();
    /*let rand = Math.floor(Math.random() * 1024) + 1;*/
    let stack = [1];
    let visited = [1];
    do {
        let possibilities = [];
        let [top, bot, right, left] = Array(4).fill(0);
        if (stack[stack.length-1] > 32) {
            top = stack[stack.length-1] - 32;
            if(visited.includes(top) == false) {possibilities.push(top);}
        };
        if (stack[stack.length-1] < 993) {
            bot = stack[stack.length-1] + 32;
            if(visited.includes(bot) == false) {possibilities.push(bot);}
        };
        if (stack[stack.length-1] % 32 !== 0) {
            right = stack[stack.length-1] + 1;
            if(visited.includes(right) == false) {possibilities.push(right);}
        };
        if ((stack[stack.length-1] - 1) % 32 !== 0) {
            left = stack[stack.length-1] - 1;
            if(visited.includes(left) == false) {possibilities.push(left);}
        };
        console.log(possibilities);
        if (possibilities.length != 0) {
            let nextStep = possibilities[Math.floor(Math.random()*possibilities.length)];
            console.log("possibilities:"+possibilities);
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
            if(visited.includes(1024) != true) {
                solution.push(nextStep);
            }
        } else {
            let pop = stack.pop();
            if(visited.includes(1024) != true) {
                solution.pop();
            }
            //console.log("Backtracking");
        }
    } while(stack.length != 0)
        console.log(solution);
}

function RestoreMaze() {
    for(let i = 1; i < 1025; i++) {
        document.getElementById(i).style.border="solid 2px";
        if(i != 1 && i != 1024) {document.getElementById(i).style.background="rgba(255, 255, 255, 0.8)";}
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
    for(let i = 1; i < 1025; i++) {
        notVisited.push(i);
    }
    let randCell;
    while (visited.length < 1024) {
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
            if (path[path.length-1] > 32) {
                top = path[path.length-1] - 32;
                possibilities.push(top);
            };
            if (path[path.length-1] < 993) {
                bot = path[path.length-1] + 32;
                possibilities.push(bot);
            };
            if (path[path.length-1] % 32 !== 0) {
                right = path[path.length-1] + 1;
                possibilities.push(right);
            };
            if ((path[path.length-1] - 1) % 32 !== 0) {
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
        //Retirar start dos visitados caso ele tenha sido ignorado com o caminho chegando em outra ala do labirinto
        /*if(path.includes(start) == false && notVisited.length != 0) {
            visited.pop(start);
            notVisited.push(start);
        }*/
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

        //Ver esse aqui, deve estar vendo errado os visited e not
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
    
}


//O último número sempre está fechado, tem que ajeitar

//Muitas vezes não tem conexão de um lado pro outro
 


//Quando um elemento está cercado de possibilidades que já foram visitadas ao invés de ir até lá e se juntar com oq já existe, ele 
//diz que a opção é inválida, gerando vezes em que não há nenhuma possibilidade existente 

//Quando só sobra um elemento não visitado e esse é usado no start ele não sabe oq fazer com o último elemento

//Todos os starts não mostram efeito algum, eles não são implementados no path provavelmente