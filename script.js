const menu=document.querySelector('.mobile-menu');
if(menu){menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.open=false}));document.addEventListener('keydown',event=>{if(event.key==='Escape')menu.open=false});}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
