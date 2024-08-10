A challenge about mazes that got a little out of control.

Challenge: Create a "Backtrack" ("maze generation") ("Stack") algorithm that makes in two minutes a maze that can't be solved in 1 minute, try to make an algorithm to solve it, make it graphic and take notes.

Notes:
- I wanted from the start to do something graphic with the maze so i went for javascript and html/css
- My brother heard of the project and urged me to make it a 3D or even a 4D maze
- I started with "maze generation" as i have never seen something in this style
- Looking at wikipedia, it says that the recursive implementation uses backtracking, so I decided to follow the routine 
- My objective became to, 1) Create an algorithm to create perfect mazes (one path from start to end), 2) Display the maze in a web page, 3) Showcase the track to reach the end
- Randomized depth-first search is said to be the most basic but it does not make perfect mazes so I should look for other possibilities after completing this one.
- To make the visualization I decided to create a grid of 16x16(256) squares, the idea being to hide the margins between the squares to make the pathway.
- Other possibility was to ignore the troubles of 4 margins per grid square and just "paint" the squares making walls out of entire grid items
- After some minor modifications I ended with 1024 squares in a 32x32 grid
- The maze should:
1) Start in a cell on the border of the maze
2) Chose a random neighbor cell not visited, mark it as such, and add it to the stack
3) Repeat until dead-end (cell with no unvisited neighbors)
4) Backtrack until finding a previous cell with valid neighbors, then, repeat step 3
5) End the algorithm when it backtracks all the way to the start
- Because of the backtracking, it is possible to start to create a solution path from when the main branch reaches the end.
- The algorithm does work but tends to create boring mazes that are just too easy to solve
- There is a good chance that my exemples have a higher tendency of creating easy mazes because of the huge size of the grid plus the tendency of creating huge branches
- My new objective became to create a Wilson's algorithm maze because of its unbiased distribution
- In the example that I found it says that the solution can be reached by depth first search so it will still use the theme of this challenge eventually
- This maze should: (Messy Interpretation)
1) Choose 2 cells and make a random path between then
2) If at any point the the path loops into itself, we erase the loop
3) If at any point the the path reaches the maze, we connect it to the maze and end sooner
4) Repeat until all cells have been filled
- After many unsuccessful attempts I did more research and ended up with a new strategy.
- This maze should: 
1) Choose a cell to be "visited"
2) Choose a random cell and make it wander until it reaches a visited cell
3) Cut the excess walk by only putting in the maze the last recorded direction from each cell after the first one 
4) Repeat until all cells have been connected to the maze, and as such, "visited".
- To cut the excess walk I need to filter the path into following the last occurrence of each cell and its direction! It should:
1) Start from the beginning of the full path
2) Follow it in steps and direction, checking each step for future instances of it
3) Finding any future instances, go for the last one and delete anything behind both in steps and directions
4) Repeat until reaching the end 
- It only needs a ending cell on the first time, after that, i should only look for the part of the maze already built, this solves both of my current issues (the last starter cell infinite loop and chance of unsolvable mazes)
- Decided to make a code to write the table instead of the huge wall of divs in the html, so as an extra I made it able to change the maze size.
- Put it in a limit of at least 2 cells per line and a max of 32, as an arbitrary decision because of the loading to generate the table.
- To solve wilson's maze, instead of finding it while creating the maze, a similar process to the first type of maze will be used, as such, it will work with a stack and to find the possible moves, the function should look to, first to all the paths ahead and then the cells already visited.
- The slow generation of the grid was annoying to an extreme, I ignored it for a while but it took soooo long each time that I decided to look into it, it seems like innerHTML makes the whole thing to be parsed again, not ideal. I found another solution in the appendChield and adapted my code for great success. Also i took off the numbers in the cells text that i was using to observe the logics of some functions.
- The max maze input was upgraded to 64 both to make something with the upgrade of method and to try to resize the cells with css by reading js, min input became 3 as 2 was terrible looking, 3x3 looks at least a little bit charming.
- Before doing anything hard with animation, i decided to train it by bringing to life a stupid idea that i had, to make the maze a disco floor effect in the maze grid, so i put a "Disco" button, it will create a fade to black in the background, hide the buttons, and start to paint the squares for the duration of a small audio clip.
- I Tried to make the random color change with animation (even looks at scss) but only found a javascript method. Used css animation in other stuff tho. The color change happened with the appliance of different classes and intervals (setInterval and setTimeout).
- Created a better restore maze (without some bugs with new functions) and a solution toggle that will be better organized in the future, when not all button appear at all times.
- New cell background for both start and finish was added if a png.
- Made an animation following the path from start to end using a png, css animation and an offset-path made everytime from the solution array.
