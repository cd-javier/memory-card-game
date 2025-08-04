# Pseudocode
## CARD
    Component Card
        Props:
            keyword
            handleclick

            variable source

            UseEffect
                fetch image from API
                assign that as the source

        
        return
            Card in a div with image
            Keyword

            On click
                HandleClick

## Game
    Component game
        Props:
            deck
        
        deck, setdeck = useState shuffled deck
        score, setscore = useState 0
        highScore, setHighScore = useState 0

        handleClick
            setScore = +1
            if score + 1 < highscore => setHighScore to score + 1

            setDeck to shuffled deck

        Return
            Score | Highscore
            Deck of cards
                Mapped => Card key and keyword = keyword