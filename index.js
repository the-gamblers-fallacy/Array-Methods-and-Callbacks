const { fifaData } = require('./fifa.js')

// ⚽️ M V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

const fifa2014 = fifaData.filter(team => {
    return team.Year === 2014 && team.Stage === "Final";
})

//(a) Home Team name for 2014 world cup final

console.log(fifa2014[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

console.log(fifa2014[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final

console.log(fifa2014[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final

console.log(fifa2014[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */

console.log(fifa2014[0]["Win conditions"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
   return data.filter(team => {
        return team["Stage"] === "Final";
   });
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, callback) {
    const years = callback(array);
    return years.map(team => team.Year);
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, callback) {
    let winners = callback(array);
    return winners.map(team => {
        if (team["Home Team Goals"] < team["Away Team Goals"]) {
            return team["Away Team Name"];
        }
        return team["Home Team Name"];
    })
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 5.
 */

function getWinnersByYear(array, finalsCallback, yearsCallback, winnersCallback) {
    const years = yearsCallback(array, finalsCallback);
    const winners = winnersCallback(array, finalsCallback);

    const winnersByYear = [];

    for (let i = 0; i < years.length; i++) {
        winnersByYear.push(`In ${years[i]}, ${winners[i]} won the world cup!`)
    }

    return winnersByYear;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(finalsArray) {
    // hahaha this looks like hell, but here's what's happening:
    // 1. I reduce the finals array to the total number of goals with the home and away teams
    // 2. I divide that number by the length of the finals array, giving me the average
    // 3. I round the average * 100, and then divide by 100 (JS way of rounding to two decimals)
    // 4. I then parse the whole kit and kaboodle to a string because that's what the tests are expecting
   return (Math.round(finalsArray.reduce((acc, item) => acc + (item["Home Team Goals"] + item["Away Team Goals"]), 0)/finalsArray.length * 100) / 100).toString();
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
