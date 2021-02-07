// Random Inspirational Quote Generator
const quotes = {
    beginning: [
        'You are ', 
        'You strength is ',
        'Your life is like ',
        'Your energy is ',
        'Your looks are '
    ],
    
    ending: [
        'a god inside a hawk\'s body!',
        'the sun!',
        'magnificent!',
        'out of his world!',
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

button.onclick = function(){
    outputBox.style.cssText = 'animation: outputBox 2s ease-in'; 
    outputBox.innerHTML = randomQuote();
    // outputBox.onanimationEnd = outputBox.style.removeProperty('animation');
};





