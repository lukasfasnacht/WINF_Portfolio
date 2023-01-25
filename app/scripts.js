const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

toggle.addEventListener('click', () => {

  if (content.className === 'content')
      content.classList.add('open');
  else
      content.classList.remove('open');

});