document.getElementById('check-btn').addEventListener('click', checkPalindrome);
document.getElementById('text-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});

function checkPalindrome() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');
    
    if (!input.trim()) {
        alert('Please input a value');
        return;
    }
    
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');
    
    if (cleanedInput === reversedInput) {
        result.textContent = `${input} is a palindrome`;
        result.style.color = 'green';
    } else {
        result.textContent = `${input} is not a palindrome`;
        result.style.color = 'red';
    }
}
