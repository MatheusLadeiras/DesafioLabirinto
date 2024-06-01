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
    while (visited.length < 1024) {
    //for(let u = 0; u < 100; u++) {
        console.log("Novo caminho");
        let start = notVisited[Math.floor(Math.random()*notVisited.length)];
        notVisited.splice(notVisited.indexOf(start), 1);
        visited.push(start);
        let randCell;
        if (notVisited.length != 0) {
            randCell = notVisited[Math.floor(Math.random()*notVisited.length)];
        } else {
            randCell = visited[Math.floor(Math.random()*notVisited.length)]; //ver a possibilidade de se achar,
        }
        let path = [randCell];
        console.log(start);
        console.log(randCell);
        let directions = [];
        do {
            //console.log("Novo step");
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
                if(visited.includes(nextStep) == true) {
                    directions.push(0);
                    console.log("Full path: "+path);
                    console.log("Full directions: "+directions);
                }
        } while (visited.includes(nextStep) == false) //
        //Retirar start dos visitados caso ele tenha sido ignorado com o caminho chegando em outra ala do labirinto
        if(path.includes(start) == false && notVisited.length != 0) {
            visited.pop(start);
            notVisited.push(start);
        }
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
                    //document.getElementById(step.toString()).style.backgroundColor="lightblue";
                    //document.getElementById(nextStep.toString()).style.backgroundColor="red";
                    break;
                case 2:
                    console.log("Bot");
                    document.getElementById(step.toString()).style.borderBottom="0px";
                    document.getElementById(nextStep.toString()).style.borderTop="0px";
                    //document.getElementById(step.toString()).style.backgroundColor="lightblue";
                    //document.getElementById(nextStep.toString()).style.backgroundColor="red";
                    break;
                case 3:
                    console.log("Right");
                    document.getElementById(step.toString()).style.borderRight="0px";
                    document.getElementById(nextStep.toString()).style.borderLeft="0px";
                    //document.getElementById(step.toString()).style.backgroundColor="lightblue";
                    //document.getElementById(nextStep.toString()).style.backgroundColor="red";
                    break;
                case 4:
                    console.log("Left");
                    document.getElementById(step.toString()).style.borderLeft="0px";
                    document.getElementById(nextStep.toString()).style.borderRight="0px";
                    //document.getElementById(step.toString()).style.backgroundColor="lightblue";
                    //document.getElementById(nextStep.toString()).style.backgroundColor="red";
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



//Quando um elemento está cercado de possibilidades que já foram visitadas ao invés de ir até lá e se juntar com oq já existe, ele 
//diz que a opção é inválida, gerando vezes em que não há nenhuma possibilidade existente 

//Quando só sobra um elemento não visitado e esse é usado no start ele não sabe oq fazer com o último elemento

//Todos os starts não mostram efeito algum, eles não são implementados no path provavelmente




function WilsonMazeGeneratorWikipedia() {
    RestoreMaze();
    let visited = [];
    let notVisited = [];
    let directions = [];
    for(let i = 1; i < 1025; i++) {
        notVisited.push(i);
    }
    let o = 0;
    let stop = 0;
    do {
        let start = notVisited[Math.floor(Math.random()*notVisited.length)];
        notVisited.splice(notVisited.indexOf(start), 1);
        if(visited.includes(start) == false) {visited.push(start)};
        //visited.push(start);
        let end = notVisited[Math.floor(Math.random()*notVisited.length)];
        console.log(start);
        console.log(end);
        let path = [start];
        //Presisa de um meio de parar o loop quando achar algum caminho já feito e só ligar os 2
        while (stop < 100000 && path.includes(end) == false ) {//&& visited.includes(path[path.length-1]) == false
            let possibilities = [];
            let nextStep;
            let [top, bot, right, left] = Array(4).fill(0);
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
            nextStep = possibilities[Math.floor(Math.random()*possibilities.length)];
            if(path.includes(nextStep) == true) {
                while (path[path.length-1] != nextStep) {
                    path.pop();
                    directions.pop();
                } 
            } else {
                path.push(nextStep);
                //Apenas quando o caminho completo for criado que se lê um por um e implementa o caminho
                //Guardar direções em objetos ou só array
                switch (nextStep) {
                    case top:
                        //console.log("Top");
                        directions.push(1);
                        break;
                    case bot:
                        //console.log("Bot");
                        directions.push(2);
                        break;
                    case right:
                        //console.log("Right");
                        directions.push(3);
                        break;
                    case left:
                        //console.log("Left");
                        directions.push(4);
                        break;
                    }
            }  
            //console.log(nextStep);
            if (visited.includes(nextStep) == false) {
                o++
                if(o > 1) {
                    break;
                }
            }
            stop++;
        } //while((stop < 10) || (path.includes(end) === false)); //path.includes(end) == false || visited.includes(nextStep) == false || stop <10
        console.log("Foi");
        console.log("path.length:"+path.length);
        for(let i = 0; i < path.length; i++) {console.log((i+1)+")path:"+path[i])}
        
        //Começa do primeiro elemento que é start, mas esse já está lá, do segundo em diante que retiramos
        console.log("directions.length:"+directions.length)
        do {
        //for(let i = 0; i < path.length; i++) {
            let step = path.shift(); //path[0];
            console.log("directions:"+directions)
            if(visited.includes(step) == false) {visited.push(step)};
            if(notVisited.includes(step) == true) {notVisited.splice(notVisited.indexOf(step), 1);};
            let direction = directions.shift();
            //console.log("path[path.length-1]:"+path[path.length-1])
            switch (direction) {
                case 1: //Tem que pegar o caminho intercalando os valores com as direções e pegando o valor do start
                    console.log("Top");
                    document.getElementById(step.toString()).style.borderTop="0px";
                    document.getElementById(path[0].toString()).style.borderBottom="0px";
                    break;
                case 2:
                    console.log("Bot");
                    document.getElementById(step.toString()).style.borderBottom="0px";
                    document.getElementById(path[0].toString()).style.borderTop="0px";
                    break;
                case 3:
                    console.log("Right");
                    document.getElementById(step.toString()).style.borderRight="0px";
                    document.getElementById(path[0].toString()).style.borderLeft="0px";
                    break;
                case 4:
                    console.log("Left");
                    document.getElementById(step.toString()).style.borderLeft="0px";
                    document.getElementById(path[0].toString()).style.borderRight="0px";
                    break;
                }
            //path.shift();
        } while (path.length != 0)
        console.log("Completou fazer o caminho de um elemento.");
        console.log(visited);
        console.log(stop);
    } while (visited.length < 1024);
}

/*
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    console.log(stack);

    Fazer o caminho pode usar isso aqui:
    document.getElementById("1").style.background="blue";
    */