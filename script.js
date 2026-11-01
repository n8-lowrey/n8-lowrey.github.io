document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
(()=>{
 const header=document.querySelector('[data-smart-header]');
 if(!header)return;
 const button=header.querySelector('.menu-toggle');
 const nav=header.querySelector('#main-navigation');
 const close=()=>{header.classList.remove('menu-open');if(button){button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation menu');button.textContent='Menu';}};
 if(button&&nav){button.addEventListener('click',()=>{const open=!header.classList.contains('menu-open');header.classList.toggle('menu-open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');button.textContent=open?'Close':'Menu';header.classList.remove('is-hidden');});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 window.addEventListener('resize',()=>{if(window.innerWidth>1100)close()});}
 let last=window.scrollY,scheduled=false;
 window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const y=window.scrollY,delta=y-last;if(y<35||header.classList.contains('menu-open'))header.classList.remove('is-hidden');else if(delta>3&&y>120)header.classList.add('is-hidden');else if(delta< -2)header.classList.remove('is-hidden');last=y;scheduled=false;});},{passive:true});
})();
