const box = document.getElementById('box');
const btn = document.getElementById('share');
const btn_img = document.querySelector('.s_img');

box.style.display = 'none';
btn.addEventListener('click', ()=>{
  if(box.style.display === 'none'){
    box.style.display = 'flex';
    btn.style.backgroundColor = 'hsl(217, 19%, 35%)';
    btn_img.style.filter = 'brightness(100)'
  }else{
    box.style.display = 'none';
    btn.style.backgroundColor = 'hsl(210, 46%, 95%)';
    btn_img.style.filter = 'brightness(1)'
  }
})