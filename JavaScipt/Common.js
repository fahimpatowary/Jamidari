// navigation menu control
    let NavNemu1 = document.querySelector(".NavNemu1");
    let NavCros = document.querySelector(".NavCros");
    let MenuBtn = document.querySelector(".MenuBtn");
    let NavMenu = document.querySelector(".NavMenu");
    NavCros.style.display = "none";
    let isValid = true;

    function NacMenuhideshow (){
        if(isValid){
            NavCros.style.display = "block";
            NavNemu1.style.display = "none";
            MenuBtn.style.background = "#c75209";
            NavMenu.style.right = '0';
            NavMenu.style.transition = "all .5s";
            isValid = false;
        }else{
            NavNemu1.style.display = "block";
            NavCros.style.display = "none";
            MenuBtn.style.background = "#fd883f";
            NavMenu.style.right = '-350px';
            NavMenu.style.transition = "all .5s";
            isValid = true;
        }
    }

// Navigation color
    // const navbar = document.querySelector('.posionFixed');
    // window.onscroll = () => {
    //     if (window.scrollY > 300) {
    //         // navbar.classList.add('nav-active');
    //         nav.stylle.background = "black";
    //     } else {
    //         nav.stylle.background = "black";
    //     }
    // };

    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 300) {
              $(".navbar").css("background" , "blue");
            }
      
            else{
                $(".navbar").css("background" , "#dae7f7");  	
            }
        })
    })