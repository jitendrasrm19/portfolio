const q=(s,a=document)=>a.querySelector(s),qa=(s,a=document)=>[...a.querySelectorAll(s)];
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});qa('.reveal').forEach(el=>obs.observe(el));
const navLinks=qa('.nav nav a');const secs=qa('main section[id]');const secObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-40% 0px -50%'});secs.forEach(s=>secObs.observe(s));
let counted=false;const c=q('.counter');if(c)new IntersectionObserver(es=>{if(es[0].isIntersecting&&!counted){counted=true;let n=0;const t=setInterval(()=>{n++;c.textContent=n;if(n>=7)clearInterval(t)},110)}}).observe(c);
addEventListener('mousemove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px');});
addEventListener('scroll',()=>{document.documentElement.style.setProperty('--sy',scrollY+'px')},{passive:true});
