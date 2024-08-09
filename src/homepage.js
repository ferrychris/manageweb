const openMenu = document.getElementById("open");
        const closeMenu = document.getElementById("close");
        const navMenu = document.getElementById("navmenu");
  
          openMenu.addEventListener("click", function() {
            navMenu.style.display = "block";
          });
  
          closeMenu.addEventListener("click", function() {
            navMenu.style.display = "none";
          });
        