document.getElementById('toggle_menu').addEventListener('click', () => {
    document.querySelector('.backdrop').classList.toggle('show');
    document.querySelector('.navbar__items_list').classList.toggle('show');
    document.querySelector('#toggle_menu').classList.toggle('toggled');
  });