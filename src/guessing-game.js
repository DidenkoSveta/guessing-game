class GuessingGame {
    constructor() {
    }
    
    setRange(min, max) {
        this.left = min
        this.right = max
    }
    
    guess() {
        this.candidate = Math.round((this.right + this.left) / 2)
        return this.candidate
    }

    lower() {
        this.right = this.candidate
    }

    greater() {
        this.left = this.candidate
    }
}

module.exports = GuessingGame;
