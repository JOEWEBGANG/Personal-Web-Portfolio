// scroll progress bar
function updateScrollBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / scrollHeight) * 100;
  
    document.querySelector(".progress-bar").style.width = scrollPercent + "%";
  }
  
  window.addEventListener("scroll", updateScrollBar);

// return to top of page button
const topButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// time based greeting
window.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
  
    document.getElementById('pageTitle').textContent = `${greeting} Welcome To My Website Portfolio!`;
  });

// dark mode / preference
const darkToggle = document.getElementById('darkModeToggle');
const prefersDark = localStorage.getItem('darkMode') === 'true';

if (prefersDark) {
  document.body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});