# Kingdom Hearts Frogger Game

## Description

Three weeks into my training course with General Assembly, I was charged with undertaking my first solo project. This project was to be a game, and four difficulty tiers of games were presented to us as options to choose. I chose to create a frogger type game from the third difficulty tier as I wanted to challenge myself. I was extremely excited to tackle my first full project from scratch, especially as it would be a game. I knew it would be really fun!


## Deployment link

[https://jamesbraid11.github.io/frogger-game](https://jamesbraid11.github.io/frogger-game)


## Timeframe & Working Team

This was a solo project for which we had a full week to complete (including planning).


## Technologies Used

- VS Code
- GitHub
- HTML
- CSS
- JavaScript


## Brief

**Technical Requirements**
- Render a game in the browser.
- Be built on a grid: do not use HTML Canvas for this.
- Design logic for winning & visually display which player won.
- Include separate HTML / CSS / JavaScript files.
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
- Use Javascript for DOM manipulation.
- Deploy your game online, where the rest of the world can access it (we will do this together at the end of the project).
- Use semantic markup for HTML and CSS (adhere to best practices).

**Necessary Deliverables**
- A working game, built by you, hosted somewhere on the internet.
- A link to your hosted working game in the URL section of your Github repo.
- A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.
- A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

**Frogger Specific Requirements**
- The game should be playable for one player.
- The obstacles should be auto generated.

**Suggested enhancements**
- Different difficulty levels.
- Auto generated boards.
- Two player mode on the same computer: players take turns; the first to lose more lives across a whole game loses.
- High score board with localStorage.


## Planning

I began my planning with a wireframe of how the game would look on a desktop browser. I labelled the elements with their required HTML tags and classes where necessary. Classes were assigned according to how the elements were to be styled in CSS or selected for use in JavaScript. I tried to make these as semantic as I could for ease of reference. I colour-coded the HTML elements based on their hierarchy on the page for my own reference.

<img width="1213" alt="1-wireframe" src="https://github.com/jamesbraid11/frogger-game/assets/147768485/19223262-9868-42fe-b204-5a3b487669c7">

I then noted down any key CSS styling that I did not want to forget, mainly for displaying and sizing elements correctly on the page.

![2-css-planning](https://github.com/jamesbraid11/frogger-game/assets/147768485/f4fca90b-7a54-4b65-9b9e-0ab481079323)

I spent a long time recording pseudocode in my plan. I laid it out as I would in my JavaScript code for ease of reference. The structure I have used is Elements-Variables-Executions-Events. I find it extremely useful to keep track of everything. I thought out and wrote down a lot of detail for some of my executions that I knew would be very challenging, including problems and multiple possible solutions.

![3-pseudocode-planning](https://github.com/jamesbraid11/frogger-game/assets/147768485/c1c2117a-6225-4dcd-bbdb-a0c3bd5083df)
![4-pseudocode-planning](https://github.com/jamesbraid11/frogger-game/assets/147768485/e07e55e8-e3c0-4a7b-b502-344218d8b152)
![5-pseudocode-planning](https://github.com/jamesbraid11/frogger-game/assets/147768485/155d8803-c935-4a0d-8dbd-ba7a9a4f1f8b)

Throughout the planning phase, I noted down ideas and extras for my project that would take it above and beyond the requirements set. Once I had finished my planning, I realised that I had actually included lots of extra aspects in the main pseudocode. This was testament to my ambition, and I couldn’t wait to get started on the project once my plan was signed off on Friday 3rd November.

![6-ideas-extras-planning](https://github.com/jamesbraid11/frogger-game/assets/147768485/5c653386-7659-448c-b5d7-77cb958b4dc4)

I kept track of my workload using my detailed pseudocode above.


## Code Process

After constructing a web page using the HTML and basic CSS styling included in my plan, I began to work on the MVP for my frogger game in JavaScript. I laid out the Elements-Variables-Executions-Events structure and input the elements, variables and event listeners I initially needed for the project.

From there, I tackled creating functions in a logical order for the game, from most important to least. To that end, I began working on the grid creation that would be my game area:

![7-grid-creation](https://github.com/jamesbraid11/frogger-game/assets/147768485/5052376c-260c-421a-b543-ebffa06cf98c)

I created the grid inside the section with a class of “game-grid”, which was saved as an element named grid in JavaScript. I used a for loop to create divs that would become the cells of the grid. The number of total cells and number of cells in each row were set dynamically using global variables named cellCount and width. This meant the grid area could easily be modified in the future. I assigned an id to each cell of its array number. I assigned the same to their inner text for ease of reference for myself while working on the functionality of the game. I made the innertext transparent upon completion of the project for styling purposes. After the for loop, I included a function to add the user character to a starting position in the grid (current position was set equal to a starting position of cell 30 at the start of the game, as shown in my pseudocode). Lastly, I ensured to call the createGrid function immediately, before all other executions, so that methods could be used on it in other functions successfully.

Next, I began work on the user controlled character’s movement. I quickly set up short functions for adding and removing the character class from their current position in the grid (shown in pseudocode). I knew I would need these in the character movement function:

![8-character-movement](https://github.com/jamesbraid11/frogger-game/assets/147768485/3c305f1b-5bff-4b32-99c7-312c4eaff9aa)

Linking to a keydown event listener, I created a variable named key in the keyPress function that represented the event code. Between removing the character class from one cell and adding it to another, the new position of the user character had to be calculated. I achieved this as shown above, ensuring that the character could not move outside of the grid.

After that, I tackled enemy movement. I knew this was to be the most challenging part of the project, as shown in the many notes on it in my pseudocode.

![9-enemy-movement](https://github.com/jamesbraid11/frogger-game/assets/147768485/49131179-0af1-4b96-8202-3ccf206137e2)

I realised quickly that I would need to first define a column in the grid using the filter method. After much research and trial and error with various methods, I finally came to the rest of the solution that you see above. I created an array with the same number of elements inside it as the filtered column, containing a sequence of strings that was to become the sequence of enemies. I created CSS styling for the class of “dark-figure” so that these enemies would be visible in the grid to the user. Inside the function, between removing and adding classes from the col1Classes array, the last element in the array is added to the beginning of the array before then removing the last element from the array. I wrapped this logic inside a setInterval function so that it would execute every n milliseconds. I set this number as a global variable so that it could be changed inside other functions later. The logic above makes the enemies in column 1 move down their column one grid cell at a time. It was a huge win when I finally achieved this solution. I replicated this logic five more times for other columns in the grid, but with different starting sequences of the enemy classes, different starting interval speeds and with some moving up their column rather than down. This, I felt, made the game more challenging and exciting.

From there, it was fairly easy to add pillar and friendly characters to the grid in certain columns by using the same filtering method and adding their classes to a cell. I used the Math.random method for friendly characters to appear in a random cell in their column upon each visit to the site, reaching the target or clicking on the play again button (that was added later).

![10-while-function](https://github.com/jamesbraid11/frogger-game/assets/147768485/d707fd62-e45d-4ea9-826d-a9235494389e)

I added an if statement inside a while loop for the generation of Donald and Goofy’s character class to a cell to ensure that they were not placed in the same cell as any pillars, shown above.

Next, I created a collision function, ensuring to check for game over:

![11-collision-function](https://github.com/jamesbraid11/frogger-game/assets/147768485/3382cd94-9655-46c2-b46e-b1185f2732de)

I then added logic to the player movement function using an if statement that would call the collision function if the cell being moved into also contained the class of any of the enemies. I did the same in the enemy movement function, calling the collision function if any cell being assigned an enemy class also contained the player character class.

A logical next step then was to create the game over function. As I had planned amongst my ideas, I created a large game over display in HTML and styled it in CSS. Using position: absolute and visual height and width sizing, I styled it so that it covered the game grid area, but its display was set to none. I included spans that I assigned to variables in JavaScript that would update with the player’s score at game over. Inside the function, I first set the game over screen to display: block so that it would become visible. I then added code that would remove the character from the game grid. Enemy intervals were cleared (they had been assigned global variables), enemy interval variables were reset to their starting speeds, then the enemy interval functions were executed to start again. The player score variable and display were updated, and ally characters were removed from the grid and assigned new positions for the next game.

Again, flowing logically, it was apparent that the user now needed some way of returning to the game after reaching game over. I added a play again button to the HTML, assigned it to a variable in JavaScript and created a function for its purposes. In the play again function, the game over screen’s display was set back to none. The lives and score variables and displays were reset for a new game, and the player character was added to the start position.

The final function needed to achieve my MVP was the target reached function. Much of the code inside was similar to that of the game over function, with character class removal, and clearing and calling enemy intervals again. This time though, enemy interval speeds were reduced rather than reset so each playthrough would feel like a new level. The player score variable and display were added to and updated. Again, ally characters were removed from the grid and assigned new positions. The player was then added to the starting position.

I finally added more logic to the character movement function so that they could not move into spaces that contained the pillar class. Also, score was added to and updated if the user met up with Donald or Goofy, as well as clearing their class from the grid. Logic was added to call the target reach function when Naminé was rescued.

Achieving my MVP in terms of functionality felt fantastic. Upon testing the game, I identified an issue with the collision and target reached functions. Currently, the user’s character would appear back at the start instantly after losing a life or reaching the target, which could lead to losing a life immediately after with any slight miscare in pressing the direction keys. Therefore, I wrapped the add character function execution inside the aforementioned functions in a setTimeout so that a user would not be able to lose a life easily after returning the start position. However, after testing the game again, I quickly realised that a user could still move their character despite the timeout as their current position was globally set to the starting position. After conducting some research, I created a variable to add to the beginning of the character movement function that, if true, would not continue to execute any of the movement code. It was then also added to the timeout functions, setting the variable to true initially, then back to false to enable character movement again after the timeout had completed. Please see the code snippets below to further explain this:

![12-stop-movement](https://github.com/jamesbraid11/frogger-game/assets/147768485/3bf23321-cef5-4a74-b374-bacdda9d96f3)

Else contained all of the character movement logic that would be executed if stopCharMovement was false.

![13-set-timeout](https://github.com/jamesbraid11/frogger-game/assets/147768485/49cf7b67-76a0-45bc-bd7a-db3c0d0fe4b8)

Above shows the setTimeout used to delay the user character’s appearance at the start position.

After completing the styling of the project, I really wanted to push myself to add more functionality. I realised a way that I could add a lot more fun to this game was to create a two player mode, where two users could play simultaneously against each other. I read through my code and made notes on what I thought would need to be added or changed to achieve this. It proved a little trickier than I initially thought, more details are provided in the next section.


## Challenges/Wins

I have combined challenges and wins in this README because, for me, they go hand in hand. Overcoming the toughest challenges in the project were not only enjoyable processes, but they gave me the biggest sense of achievement.

The best challenge and biggest win of my MVP was coding the enemy movement. I initially trialled the first solution detailed in my pseudocode plan, where enemy appearance and movement were separate functions. As suspected and detailed in my plan though, I could not find a way to make enemies appear and move across the screen in varying sequences apart from at random. This of course led to issues with the gameplay as it was possible for enemies to appear continuously for periods of time, creating long walls in front of the user that were frustrating to play through.

I then turned to the forEach method. I assigned enemy classes in a varied sequence to a column. I then used forEach to iterate through the column and move any instance of the enemy class in a cell to move down every second. This gave me the varied sequence of enemies across the column that I desired, and the enemies moved down the screen together every second. However, the enemies were not reappearing at the start of the column, so very quickly the user was left with an empty screen and an easy game!

After scouring my notes on arrays, I had a eureka moment when reading about the push, pop, shift and unshift methods. I realised that I should create a separate classes array of the enemy sequence that was equal length to the array of the column in the grid, rather than assigning the classes to the grid array in the first instance.  Then, I could use push, pop, shift and unshift to move the sequence of the classes array along by one every second, and make the column in the grid mimic this array’s behaviour using the forEach method.

It felt incredible when I finally achieved a working solution to the enemy movement in my game. I felt proud that I continued working to evolve and improve this function to achieve the exact result that I envisaged for it. This really sparked my confidence and pace of working into overdrive for the rest of the project.

The best challenge and biggest win of my project as a whole was definitely adding simultaneous two player functionality. There was a huge amount to add to and change in the code to make it work seamlessly. Elements and variables were copied and created for a second user’s lives and score variables and display. As well as adding and removing the second character from the screen. The currently redundant start button was converted into a two player button. After creating an event listener for it, the following code was added to the two player button function:

![14-two-player-mode](https://github.com/jamesbraid11/frogger-game/assets/147768485/05ac687d-5acb-4498-a903-69329baddd60)

The first difficult challenge was how to listen for and execute a second player’s movement in the grid. After conducting some research, I did not believe that I could create separate event listeners for key presses of the arrow keys and the WASD keys. After some thought, my solution was to add the second player’s movement logic to my existing character movement function, separating the two sets of code with an if/else if statement with conditions pertaining to which key had been pressed. Ie:

![15-player-one-keys](https://github.com/jamesbraid11/frogger-game/assets/147768485/eb761e03-171c-443a-8276-09141a0b02d9)

Execute the following logic for player one.

![16-player-two-keys](https://github.com/jamesbraid11/frogger-game/assets/147768485/de155f04-9de3-4851-b8cc-060dc1f692c2)

Execute the following logic for player two.

As well as copying all of the relevant logic for player two’s movement based on player one’s, I added code that would stop the players from entering each others’ cells in the grid.

I then made copies of the collision function for the second player, ensuring to add logic inside the enemy movement function that would execute this when needed. I also made a new target reached function for the second player.

The final big challenge I set myself was to make it so that the game over function was only executed when both players had run out of lives, if the game was in two player mode. It took a little while to iron out all of the logic that was needed to be added to both players’ collision functions, particularly player one’s. This is because, as previously alluded to, checks would need to be made to see if player two was active or not. I did finally achieve this by running through scenarios one by one to ensure that the desired sequence of events was followed in the gameplay. Here is the code that was added to and edited in player one’s collision function:

![17-collision-edit](https://github.com/jamesbraid11/frogger-game/assets/147768485/bbe0b51f-4b3a-44c9-acfe-a6bdc376bd5b)

It was necessary to return both players to their starting position if the target was reached as well so this was coded into both players’ target reached functions. In a similar fashion to above, here is the logic that was added to player one’s target reached function:

![18-target-reached-edit](https://github.com/jamesbraid11/frogger-game/assets/147768485/bd034761-e4a6-429f-ba0e-4bf8219d0b2f)

After updating the game over and play again functions to include everything necessary for player two, the project was then complete with seamless simultaneous two player functionality. I was ecstatic with what I had achieved, but also could not stop my mind from conjuring many ideas of how to improve the game further!


## Key Learning

After overcoming the major hurdle of the enemy movement function, coding the rest of the project really flowed. I became very confident with:
- Ordering control flow.
- Organising my code so that it was easy to find.
- Writing useful comments for myself and other interested parties throughout the code.
- Creating global variables so they could be accessed by other functions.
- Writing and structuring complex if/else, setInterval and forEach functions.

New learning through research that I incorporated in my project successfully included how to disable a function using a global variable and an if/else statement at the start of the function (detailed earlier in this document). I also learned how to use an if statement inside a while loop for the first time. I also taught myself how to add hover effects and cursor style changes over elements with CSS, which I added to my buttons.


## Bugs

I worked through many bugs in the process of creating this project, but after lots of thorough testing I believe none remain.


## Future Improvements

I have already made two improvements to my game based on user feedback. I have reduced the rate at which enemies’ speed increases to lengthen the game and make it more enjoyable. I also created an audio element in JavaScript, then added logic to various functions for the source of the audio file to change to a relevant soundbite, then play it. I would like to add the following in the future:
- Use classes and objects for enemies to make the enemy movement code more DRY.
- Add a new initial screen with 1 or 2 player start options.
- Explore options to make the game grid area more visually appealing.
- Expand the game grid so it is longer to increase game length and improve the user experience.
- Add media queries so that the text inside the left and right sections fill their containers more appropriately at larger than average screen sizes.
- Make the game mobile compatible, again with media queries, but also adding a virtual d-pad to the screen.
- Add a high score display, the value of which is saved to the DOM permanently for players to try and beat.
- Add background music that can be toggled on and off with a button.
