# Flashcards
Building an alternative to Quizlet

### Feature List:
- [ ] UX Buttons
    - [x] Generate cards
    - [x] Start studying
    - [ ] Shuffle cards
    - [x] Light/Dark [theme switch](https://github.com/rbgk/flashcards/#theme-switch)
    - [x] HTML Text Formatting [toolbar buttons](https://github.com/rbgk/flashcards/#toolbar-buttons)
    - [x] Text wrapping toggle [toolbar buttons](https://github.com/rbgk/flashcards/#toolbar-buttons)
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
### Known Limitations of Project
- When a word or definition includes a comma, only the 1st comma is parsed as the splitter, and any characters following the 2nd comma will not be included in definition  
- Browser localStorage option only saves (1) set, while it has ability to store more  
- At the current time, this is only available on the web  

#### Theme Switch
- Automatically detects OS-preferred theme and assigns the respective theme  
- Theme button functionality allows for manually override  
- Manual override is stored in localStorage holding higher precedence than auto-detected preference  

#### Toolbar buttons
A section of buttons aiding the user.  
- Text formatting from bold, italic, underline
  - HTML tags are NOT limited to bold, italic, underline. User can take advantage of `.innerHTML` and use supported HTML tags
- Saving and loading a set
- Clears the text box at one button click
