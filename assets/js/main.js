  // SHOW MENU

  const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId) 
     nav= document.getElementById(navId) 
     if(toggle && nav) {
        toggle.addEventListener('click',() =>{
            nav.classlist.toggle('show')
        });
     }
  }

  showMenu('nav_toggle','nav_menu')

  // ACTIVE & REMOVE ACTIVE
  const navLink = document.querySelectorAll('.nav_link')

  function linkAction(){
    navLink.forEach
  }


  navLink.forEach(n => n. addEventListener('click',linkAction))