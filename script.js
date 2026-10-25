const steps=[
{tag:'PONTO DE PARTIDA',title:'Entender seu momento<br>já é um começo.',text:'Como tem sido sua rotina de preparação? Quais dúvidas aparecem com mais frequência? Reconhecer seu ponto de partida ajuda a dar contexto aos próximos passos.',question:'Qual é o maior desafio da sua preparação hoje?'},
{tag:'UM OBJETIVO DE CADA VEZ',title:'Dar nome às prioridades<br>traz mais clareza.',text:'Pense no que você deseja desenvolver e nos pontos que precisam de atenção. Um objetivo concreto pode ser mais fácil de acompanhar do que uma expectativa distante.',question:'O que você gostaria de compreender melhor nesta etapa?'},
{tag:'CONTINUIDADE',title:'Um próximo passo<br>que caiba na sua rotina.',text:'Olhe para o tempo disponível e para as responsabilidades do seu dia. Que pequena mudança pode ajudar você a dar continuidade à preparação?',question:'Qual ação possível você pode começar nesta semana?'}
];
const tabs=[...document.querySelectorAll('[role="tab"]')],panel=document.querySelector('[role="tabpanel"]');
function selectStep(index,focus=false){tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});const step=steps[index];panel.id='panel-'+(index+1);panel.setAttribute('aria-labelledby','tab-'+(index+1));panel.querySelector('.panel-tag').textContent=step.tag;panel.querySelector('h3').innerHTML=step.title;panel.querySelector(':scope > p').textContent=step.text;panel.querySelector('.reflection p').textContent=step.question;if(focus)tabs[index].focus()}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectStep(index));tab.addEventListener('keydown',event=>{let next=index;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectStep(next,true)})});
const menu=document.querySelector('.mobile-menu');
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>menu.open=false));
document.addEventListener('keydown',event=>{if(event.key==='Escape')menu.open=false});
document.getElementById('year').textContent=new Date().getFullYear();
