const sidebar=document.getElementById('sidebar');
const collapseToggle=document.getElementById('collapseToggle');
const mobileMenu=document.getElementById('mobileMenu');
const contentTitle=document.getElementById('contentTitle');
const contentDescription=document.getElementById('contentDescription');
const contentIcon=document.getElementById('contentIcon');
const crumb=document.getElementById('crumb');
const pages={
 Home:{icon:'⌂',description:'Your dashboard is ready. Choose a section from the sidebar to explore.'},
 About:{icon:'ⓘ',description:'Learn more about this workspace, the people behind it, and what we do.'},
 Services:{icon:'▣',description:'Explore the services and tools available in your workspace.'},
 Contact:{icon:'✉',description:'Get in touch with the team. We are here to help you move forward.'}
};
function toggleSidebar(){const collapsed=sidebar.classList.toggle('collapsed');collapseToggle.setAttribute('aria-label',collapsed?'Expand sidebar':'Collapse sidebar');collapseToggle.title=collapsed?'Expand sidebar':'Collapse sidebar'}
collapseToggle.addEventListener('click',toggleSidebar);
mobileMenu.addEventListener('click',toggleSidebar);
document.querySelectorAll('.nav-item').forEach(item=>{
 item.addEventListener('click',()=>{
  document.querySelectorAll('.nav-item').forEach(x=>{x.classList.remove('active');x.removeAttribute('aria-current')});
  item.classList.add('active');item.setAttribute('aria-current','page');
  const name=item.dataset.page,info=pages[name];
  contentTitle.textContent=name;contentDescription.textContent=info.description;contentIcon.textContent=info.icon;crumb.textContent=name.toUpperCase();
 });
});
let toastTimer;
document.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',async()=>{
 const text=document.getElementById(btn.dataset.copy).textContent;
 try{await navigator.clipboard.writeText(text);showToast('Code copied to clipboard')}
 catch{showToast('Select and copy the code manually')}
}));
function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
