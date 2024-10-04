# Ranked Matches Calculator Documentation

## Overview

This application calculates a player's ranked match balance based on the number of wins and losses and categorizes the player into different levels. The classification ranges from **Iron** to **Immortal**, depending on the player's performance.

## Classification Criteria

| Wins Range        | Rank       |
|-------------------|------------|
| Less than 10      | Iron       |
| 11 - 20           | Bronze     |
| 21 - 50           | Silver     |
| 51 - 80           | Gold       |
| 81 - 90           | Diamond    |
| 91 - 100          | Legendary  |
| Greater than 101  | Immortal   |

## Input/Output

### Input

- **Wins**: Number of wins (e.g., "85").
- **Losses**: Number of losses (e.g., "20").

### Output

A message in the following format:
```
The Hero has a ranked balance of {balance} and is at the level of {rank}
```

### Example

**Input**:
```
Wins: 85
Losses: 20
```

**Output**:
```
The Hero has a ranked balance of 65 and is at the level of Diamond
```

## Implementation Details

The player's rank is determined using a series of conditional statements (`if-else`). The balance is calculated by subtracting the losses from the wins, and the resulting rank is based on the number of wins.

## Dependencies

- `readline-sync` for input handling via command line.
- TypeScript for type safety and cleaner JavaScript code.

## Running Tests

Testing can be done manually by executing the program multiple times with different inputs, or automated unit tests can be written using frameworks like Jest.

## Future Improvements

- Allow players to save their match records to a database or a file.
- Add more levels or customize the ranking system for advanced gameplay.
