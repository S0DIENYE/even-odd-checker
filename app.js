const form = document.querySelector('form');
const input = document.querySelector('input#number');


form.onsubmit = function(e) {
    e.preventDefault()
    const value = input.value;

    if(value % 2 == 0) {
        console.log('Even Number')
    } else{
        console.log('Odd Number')
    }

}