import * as readline from 'readline-sync';

function getRank(wins: number): string {
    if (wins < 10) {
        return "Iron";
    } else if (wins >= 11 && wins <= 20) {
        return "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        return "Silver";
    } else if (wins >= 51 && wins <= 80) {
        return "Gold";
    } else if (wins >= 81 && wins <= 90) {
        return "Diamond";
    } else if (wins >= 91 && wins <= 100) {
        return "Legendary";
    } else {
        return "Immortal";
    }
}

const wins: number = parseInt(readline.question("Enter the number of wins: "));
const losses: number = parseInt(readline.question("Enter the number of losses: "));

const balance: number = wins - losses;
const rank: string = getRank(wins);

console.log(`The Hero has a ranked balance of ${balance} and is at the level of ${rank}`);
