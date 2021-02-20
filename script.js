// Random Inspirational Quote Generator
const quotes = {
    beginning: [
        'You are ', 
        'You strength is ',
        'Your life is ',
        'Your energy is ',
        'You look '
    ],
    
    ending: [
        'like a god/goddess!',
        'radiating!',
        'magnificent!',
        'out of this world!',
        'wonderful!',
        'contagiously positive!',
        'extraordinary!'
    ]
};

const randomQuote = () => {
    let firstHalf = quotes.beginning[Math.floor(Math.random() * quotes.beginning.length)];
    let secondHalf = quotes.ending[Math.floor(Math.random() * quotes.beginning.length)];
    return firstHalf + secondHalf;
}

const container = document.querySelector('.container');
const outputBox = document.querySelector('.output');
const button = document.querySelector('.button');

button.onclick = function() {
    outputBox.style.cssText = 'animation: outputBox 2s ease-in; \
                                font-size: 3rem; \
                                font-weight: 400'; 
    outputBox.innerHTML = randomQuote();
    outputBox.onanimationend = function() {
        outputBox.style.cssText = 'font-size: 3rem; \
                                    font-weight: 400';
    }
};