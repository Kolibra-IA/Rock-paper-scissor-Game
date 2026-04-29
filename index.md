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
- The score are stored in localStorage, so whenever there's a refresh, it is updated accordingly.

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

- The score is stored in an object.
- As each comparison is done, the score object is updated accordingly.
- The total score is updated on the UI.

# 6. The reset button can be clicked to reset the game:

- When clicked, the entire score should be reset to 0.
- The UI should be updated accordingly.

# 7. The auto-play button can be clicked to auto-play the game:

- When the auto-play is clicked, the game should be able to play itself.
- If the button name is 'Autoplay', when clicked, use setInterval to play the game.
- If the button name is 'Stop', the clearInterval should be leveraged to stop the game.

# 8. The score is stored in localStorage, so whenever there's a refresh, it is updated accordingly:

- The score is tracked during refresh by leveraging localStorage and JSON.