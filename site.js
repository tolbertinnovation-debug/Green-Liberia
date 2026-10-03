(function(){
if(!window.IntersectionObserver||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var sel='.section-head,.card,.work-card,.area,.feature,.next-card,.channel-card,.video-card,'+
'.gallery-grid figure,.routes a,.stake-grid>div,.facts>div,.purpose-grid article,.approach-list li,'+
'.ph-art,.ph-index,.purpose-pair>div,'+
'.partnership,.newsnote,.contact-brief,.form-panel,.embed,.hero-image,.underhero,.equation-row,.areas,.lost-grid a';
var els=[].slice.call(document.querySelectorAll(sel));
// stagger siblings so a grid resolves as a run rather than all at once
var groups={};
els.forEach(function(el){
  var k=el.parentNode&&el.parentNode!==document.body?(el.parentNode.className||'p')+el.parentNode.children.length:'x';
  (groups[k]=groups[k]||[]).push(el);
});
Object.keys(groups).forEach(function(k){
  groups[k].forEach(function(el,i){ if(groups[k].length>1&&i<6) el.style.setProperty('--d',(i*70)+'ms'); });
});
document.documentElement.dataset.rev='1';
var io=new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); } });
},{rootMargin:'0px 0px -8% 0px',threshold:0.01});
els.forEach(function(el){ io.observe(el); });
// anything already past the fold on load should never wait for a scroll
requestAnimationFrame(function(){
  els.forEach(function(el){ if(el.getBoundingClientRect().top<innerHeight){ el.classList.add('is-in'); io.unobserve(el);} });
});
})();
document.querySelectorAll('[data-embed]').forEach(box=>{const btn=box.querySelector('button');if(!btn)return;btn.addEventListener('click',()=>{const f=document.createElement('iframe');f.src=box.dataset.embed;f.title=box.dataset.embedTitle||'Embedded media';f.loading='lazy';f.referrerPolicy='strict-origin-when-cross-origin';f.allow='encrypted-media; picture-in-picture; web-share; fullscreen';f.allowFullscreen=true;if(box.dataset.embedRatio)f.style.aspectRatio=box.dataset.embedRatio;if(box.dataset.embedHeight)f.style.height=box.dataset.embedHeight+'px';box.classList.add('is-loaded');box.replaceChildren(f);f.focus&&f.focus()})});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelector('#privacy-button').addEventListener('click',()=>{document.querySelector('#guide-title').textContent='Privacy & website information';document.querySelector('#guide-body').innerHTML='<p>This website does not submit introduction forms, create accounts, process payments, or use analytics. Your draft remains in the page while it is open and is cleared when the page is reloaded.</p><p>Fonts are loaded from Google Fonts, so your browser connects to Google to display them. Every photograph on this site is served from this website itself. The hosting provider may keep standard access logs.</p><p>Environmental guides are introductory editorial content. Photographs of VGL activities are supplied by VGL Media and served from this website. The Nature and Clean energy guide-card photographs are illustrative and do not document VGL activities. Facebook and YouTube links open external platforms with their own privacy policies. This site can show a YouTube player and a Facebook page feed, but neither is requested until you select the button that loads it; once loaded, your browser connects to those platforms, which may set their own cookies. YouTube is embedded through its no-cookie domain. Organization details are drawn from the VGL Media Inc. organization profile. The email button opens your email app; sending is completed by you through your email provider.</p>';document.querySelector('#guide-dialog').showModal()});
document.querySelector('#year').textContent=new Date().getFullYear();
