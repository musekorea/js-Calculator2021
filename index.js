const input = document.querySelector('#input');
const keys = document.querySelectorAll('.key');
const bracket = document.querySelector('.key[value="("]');
const delBtn = document.querySelector('.delBtn');

let bracketToggle = true;

keys.forEach((item, index) => {
  item.addEventListener('click', calc);
});

function calc(event) {
  if (event.target.value === 'clear') {
    input.value = '';
    return;
  }

  if (event.target.value === 'equal') {
    input.value = eval(input.value);
    return;
  }
  if (event.target.value === 'del') {
    del();
  }
  let keyNumber = event.target.value;
  input.value = input.value + keyNumber;
  delBtn.value = 'del';
  console.log('loopCheck');
}

function del() {
  delBtn.value = '';
  let a = String(input.value);
  a = a.split('');
  a.pop();
  a = a.join('');
  input.value = a;
}

//값이 비었을때 = 클릭하면 undefined 나오는 문제
//() bracket function 구현하기
//eval()을 쓰지 않는다면 어떻게 구현해야 할지 고민
