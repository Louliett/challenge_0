"use strict";

//import read from commandline
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//just a simple menu with commands
var menu = " Please input a series of commands separated by comma: \n 0. Exit the simulation. \n 1. Move forward. \n 2. Move backwards. \n 3. Rotate 90 degrees clockwise. \n 4. Rotate 90 degrees counterclockwise. \n ";

//request the size of the board and position
//NOTE: the board needs 4 parameters separated by comma to work: width, height, y, x.
//the input is not handled, meaning if the user didn't provide the input format specified in the task, it's not going to work
//reasoning: it's not the goal of the task
rl.question('Please input the size of table and position separated by comma:', (answer) => {
    //get rid of the commas
    var numbers = answer.replace(/,/g, '');
    //extract the values for the board dimensions
    var width = parseInt(numbers.charAt(0));
    var height = parseInt(numbers.charAt(1));
    //extract the values for the position
    var x = parseInt(numbers.charAt(2));
    var y = parseInt(numbers.charAt(3));
    var position = [y, x];
    //define the default orientation of the object
    var orientation = 'north';

    console.log('board created with dimensions: ' + width + ' x ' + height);
    console.log('object position: ' + position);
    console.log('\n');

    //request the list of commands separated by comma
    //NOTE: just like before, the input is not handled, if the user did not respect the format sepcified in the task, it's not going to work
    //reason: it's not the goal of the task
    rl.question(menu, (answer2) => {
        // get rid of the commas
        var raw_commands = answer2.replace(/,/g, '');
        var commands = [];
        //put the commands into an array
        //this could have been done without even putting the characters into the array
        for (let i = 0; i < raw_commands.length; i++) {
            commands.push(raw_commands.charAt(i));
        }
        //iterate throuh the array and at each index pass the value to the switch
        for (let j = 0; j < commands.length; j++) {
            var option = parseInt(commands[j]);
            //at each iteration, run one of the cases from the switch
            switch (option) {
                case 0:
                    console.log('Position: ' + position);
                    process.exit(0);
                    break;
                case 1:
                    position = forward(orientation, position, width, height);
                    break;
                case 2:
                    position = backwards(orientation, position, width, height);
                    break;
                case 3:
                    orientation = rotateClockWise(orientation);
                    break;
                case 4:
                    orientation = rotateCounterClockWise(orientation);
                    break;
                default:
                    console.log('invalid input');
                    break;
            }
        }

    });
    
});

//function to move forward
function forward (orientation, position, width, height) {
    var y = position[0];
    var x = position[1];
    if(orientation == 'north') {
        x = x - 0;
        y = y - 1;
    } else if (orientation == 'south') {
        x = x + 0;
        y = y + 1;
    } else if (orientation == 'east') {
        x = x + 1;
        y = y + 0;
    } else if (orientation == 'west') {
        x = x - 1;
        y = y - 0;
    }

    if(x < 0 || x > width || y < 0 || y > height) {
        return [-1, -1];
    } else {
        return [y, x];
    }
}

//function to move backwards
function backwards (orientation, position, width, height) {
    var y = position[0];
    var x = position[1];
    if (orientation == 'north') {
        x = x + 0;
        y = y + 1;
    } else if (orientation == 'south') {
        x = x - 0;
        y = y - 1;
    } else if (orientation == 'east') {
        x = x - 1;
        y = y - 0;
    } else if (orientation == 'west') {
        x = x + 1;
        y = y + 0;
    }

    if (x < 0 || x > width || y < 0 || y > height) {
        return [-1, -1];
    } else {
        return [y, x];
    }
}

//function to rotate clockwise
function rotateClockWise(orientation) {
    if (orientation == 'north') {
        orientation = 'east';
    } else if (orientation == 'south') {
        orientation = 'west';
    } else if (orientation == 'east') {
        orientation = 'south';
    } else if (orientation == 'west') {
        orientation = 'north';
    }
    return orientation;
}

//function to rotate anticlockwise
function rotateCounterClockWise(orientation) {
    if (orientation == 'north') {
        orientation = 'west';
    } else if (orientation == 'south') {
        orientation = 'east';
    } else if (orientation == 'east') {
        orientation = 'north';
    } else if (orientation == 'west') {
        orientation = 'south';
    }
    return orientation;
}
