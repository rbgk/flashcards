# Flashcards
Building an alternative to Quizlet

### Feature List:
- [ ] UX Buttons
    - [ ] Generate cards
    - [ ] Start studying
    - [ ] Shuffle cards
    - [ ] Light/Dark [theme switch](https://github.com/rbgk/flashcards/#theme-switch)
- [ ] Input parsing
    - [ ] Raw user input using comma separation `word,definition`
- [ ] Game
    - [ ] Play in order 
    - [ ] Play shuffled 
- [ ] Support for keyboard input navigation
    - [ ] Spacebar flips card
    - [ ] Arrow keys progress through cards
- [ ] Import file to generate cards
    - [ ] Import as JSON file
    - [ ] Import as CSV file
- [ ] Export cards to file
    - [ ] Export as JSON file
    - [ ] Export as CSV file

---
#### Theme Switch
- Automatically detects OS-preferred theme and assigns the respective theme  
- Theme button functionality allows for manually override  
- Manual override is stored in localstorage holding higher priority than OS-level preference  
