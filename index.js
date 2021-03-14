const input = document.querySelector('#input');
const keys = document.querySelectorAll('.key');
const bracket = document.querySelector('.key[value="("]');
const delBtn = document.querySelector('.delBtn');
const escBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
input.focus();

//===============Keyboard Input=========================================
window.addEventListener('keydown', keyboard);
function keyboard(event) {
  escBtn.classList.remove('active');
  input.focus();
  currentValue = event.key;
  console.log(currentValue);

  if (currentValue === 'Enter') {
    console.log(currentValue);
    input.value = eval(input.value);
    equalBtn.classList.toggle('active');
    return;
  }

  if (currentValue === 'Escape') {
    console.log(currentValue);
    input.value = '';
    escBtn.classList.toggle('active');
    return;
  }
  if (currentValue === 'Backspace') {
    delBtn.classList.toggle('active');
  }
}

//===============Click Input============================================
keys.forEach((item, index) => {
  item.addEventListener('click', calc);
});

function calc(event) {
  input.focus();
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
//=========

//값이 비었을때 = 클릭하면 undefined 나오는 문제
//() bracket function 구현하기
//eval()을 쓰지 않는다면 어떻게 구현해야 할지 고민
//키보드로 눌렸을때 입력가능하게 구현하기 &
//같은 키보드 두번 눌렀을때 active 효과 안나옴.
