function inject(id, url){
  const el = document.getElementById(id);
  if(!el) return;
  fetch(url, {cache:'no-cache'}).then(r=>r.text()).then(html=>{
    el.innerHTML = html;
    // Set year after footer loads
    const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  }).catch(()=>{ el.innerHTML = ''; });
}
function toggleNav(){
  const ul = document.querySelector('nav ul');
  if(!ul) return;
  const open = getComputedStyle(ul).display !== 'none';
  ul.style.display = open ? 'none' : 'flex';
  if(!open){ ul.style.flexDirection='column'; ul.style.gap='8px'; ul.style.padding='12px 0'; }
}
document.addEventListener('DOMContentLoaded', ()=>{
  inject('site-header','/partials/header.html');
  inject('site-footer','/partials/footer.html');
});
