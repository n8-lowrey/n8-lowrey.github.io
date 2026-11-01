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

// Soft cross-page fade fallback for browsers without cross-document View Transitions.
(()=>{
 if(document.startViewTransition || (CSS.supports && CSS.supports('view-transition-name: root')))return;
 const css=document.createElement('style');css.textContent='body.n8-enter{animation:n8-fallback-enter .26s ease-out both}body.n8-leave{opacity:0;transition:opacity .15s ease}@keyframes n8-fallback-enter{from{opacity:0}to{opacity:1}}@media(prefers-reduced-motion:reduce){body.n8-enter{animation:none}body.n8-leave{transition:none}}';document.head.appendChild(css);
 document.body.classList.add('n8-enter');
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target||a.hasAttribute('download'))return;const dest=new URL(a.href,location.href);if(dest.origin!==location.origin||dest.pathname===location.pathname||!dest.pathname.endsWith('.html')&& !dest.pathname.endsWith('/'))return;e.preventDefault();if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.assign(dest.href);return;}document.body.classList.add('n8-leave');setTimeout(()=>location.assign(dest.href),150);});
})();
