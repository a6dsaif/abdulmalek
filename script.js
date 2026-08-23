window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader').classList.add('done'),800));
const lang=document.getElementById('lang'),nav=document.getElementById('nav'),menu=document.getElementById('menu');let current='ar';
function setLanguage(l){current=l;document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';lang.textContent=l==='ar'?'EN':'AR';document.querySelectorAll('[data-ar]').forEach(e=>e.innerHTML=e.dataset[l]);}
lang.onclick=()=>setLanguage(current==='ar'?'en':'ar');menu.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.addEventListener('mousemove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
