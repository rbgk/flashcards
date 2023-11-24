# Flashcards
Building an alternative to Quizlet

### Feature List:
- [ ] UX Buttons
    - [ ] Generate cards
    - [ ] Start studying
    - [ ] Shuffle cards
    - [x] Light/Dark [theme switch](https://github.com/rbgk/flashcards/#theme-switch)
    - [x] Save a set [toolbar buttons](https://github.com/rbgk/flashcards/#toolbar-buttons)
    - [x] Load saved set [toolbar buttons](https://github.com/rbgk/flashcards/#toolbar-buttons)
    - [x] Clear textbox [toolbar buttons](https://github.com/rbgk/flashcards/#toolbar-buttons)
- [ ] Input parsing
    - [x] Raw user input using comma separation `word,definition`
- [ ] Game
    - [x] Play in order 
    - [ ] Play shuffled 
- [ ] Support for keyboard input navigation
    - [ ] Spacebar flips card
    - [ ] Arrow keys progress through cards
- [ ] Import file to generate cards
    - [ ] Import as `.txt` file
    - [ ] Import as `json` file
    - [ ] Import as `csv` file
- [ ] Export cards to file
    - [ ] Export as `txt` file
    - [ ] Export as `json` file
    - [ ] Export as `csv` file

---
#### Theme Switch
- Automatically detects OS-preferred theme and assigns the respective theme  
- Theme button functionality allows for manually override  
- Manual override is stored in localStorage holding higher precedence than auto-detected preference  

#### Toolbar buttons
A row of buttons aiding the user, consisting of saving and loading a set, and clearing the text box.
