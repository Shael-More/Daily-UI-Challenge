const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const specialChar = ['%', '*', '/', '-', '+', '='];

let output = '';

const calculator = (btnVlaue) => {
  if (btnVlaue === '=' && btnVlaue !== '') {
    output = eval(output.replace('%', '/100'));
  } else if (btnVlaue === 'DEL') {
    output = output.toString().slice(0, -1);
  } else if (btnVlaue === 'AC') {
    output = '';
  } else {
    if (output === '' && specialChar.includes(btnVlaue)) return;
    output += btnVlaue;
  }

  display.value = output
};
buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculator(e.target.dataset.value));
});
