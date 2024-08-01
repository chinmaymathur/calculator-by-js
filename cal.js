document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                screen.value = '';
            } else if (value === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }
            } else {
                screen.value += value;
            }
        });
    });
});



