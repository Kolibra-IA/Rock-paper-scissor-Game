### GOAL:

- Build a rock-paper-scissor game, which allows a user and a computer to make a pick out of three different picks: rock, paper and scissors; the result is on the basis of these rules:

1. Rock beats scissors.
2. Paper beats rock.
3. Scissors beat paper.

## UI Flow:

- User's pick: rock, paper and scissors.
- Computer's random pick.
- Comparison between user's pick and computer's pick.
- The result is announced.
- The result is updated.
- Reset score.
- Auto-play.

## ALGORITHM

- The user select a pick
- The computer select a pick.
- The two picks are compared.
- The result(win, loss or tie) is announced based on the rules.
- The total score is updated.
- The reset button can be clicked to reset the game.
- The auto-play button can be clicked to auto-play the game.

# 1. user select a pick:

- The picks are three: rock, paper and scissor.
- The user selects just one.
- Then:

# 2. The computer select a pick:

- The computer selects a random pick.
- The randomization is achieved via the inbuilt Math.random function. Orderly classify all the possible outcomes of Math.random() into three categories and match each category to each pick (rock, paper or scissors).

# 3. The two picks (user and computer) are compared:

- Having created a function for the computer's pick (a very logical thing to do), call it within the callback function of the user-pick element selection. Then, store it in a variable.

- Store the user pick in particular in a variable too.
  ~ Note: I'm not sure if declaring the variables within the callback function (of the user-pick element selection) is BEST or NOT.

- Compare the picks.

# 4. The result(win, loss or tie) is announced based on the rules:

- After each comparison, the result (based on theknown rules) is updated in the result variable.
- Update the result in the UI.

# 5. The total score is updated:

-
