let form = document.querySelector('.form');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let div = document.querySelector('.div');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');

form.addEventListener('submit',(a) => {
      a.preventDefault();
      let b =Number(input1.value);
      let c =Number(input2.value);
      div.innerHTML= `${b}+${c}=${b+c} <br> ${b}-${c}=${b-c} <br> ${b}*${c}=${b*c} <br> ${b}/${c}=${b/c}`;
      input1.value = '';
      input2.value = '';
})