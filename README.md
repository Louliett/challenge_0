# challenge_0

To run this app you need to have nodejs installed on your machine.
https://nodejs.org/en/download/

No extra modules are needed.
The app is run through command line.
by writing:
'node app' to run the first file
'node app2' to run the second file.


app.js takes commands one by one and each times displays feedback.
1. takes as an input the board width, height and position of the object: '4,4,2,2'
2. the menu asks for input to move the object across the board or to rotate:
>1 
the object moved forward
>2
the object moved backwards
>0
position [0,1]

By pressing 0 the program will display position e.g. [0,1] if the object is on board or [-1,-1] if the object fell of the board.

app2.js takes a serie of commands and displays the result directly.
1. takes as an input the board width, height and position of the object: '4,4,2,2'
2. the menu asks for input of all the commands separated by commas and that ends in 0: '1,3,2,4,2,0'
the result is displayed directly and is a set of integers e.g. [0,1] if the object is on board or [-1,-1] if the object fell of the board.
