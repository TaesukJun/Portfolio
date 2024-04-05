document.write(`


<!-- &&&&&&&&&&&&&&&&&&   -->
<!-- Burger menu section -->
<!-- &&&&&&&&&&&&&&&&&&   -->
<nav class="burger-menu">

    <div class="header-margin">
        <!-- header margin -->
    </div>

    <ul>
        <li><a href="index.html">HOME</a></li>
        <li id ="galleryBurger" class="burger-gallery"><a  href="gallery.html">GALLERY</a></li>
        <div id ="galleryBurgerSub" class= "burger-gallery-sub">
            <div><a class= "burger-gallery-01" href="##">Scenery</a></div>
            <div class= "burger-gallery-02"><a class= "burger-gallery-03" href="##">Pet</a></div>
            <div><a href="##">Portrait</a></div>
            <div><a href="##">Poster</a></div>
        </div>
        <li><a class="burger-aboutMe" href="aboutMe.html">ABOUT ME</a></li>
        <li><a class="burger-contact" href="mailto:tjun@purdue.edu">CONTACT</a></li>
        
    </ul>

</nav>


<!-- &&&&&&&&&&&&&&&&&&   -->
<!-- header section -->
<!-- &&&&&&&&&&&&&&&&&&   -->

<header class="header-main">
    <div class="header-main-logo">
        <img id = "main-logo" src="img/pikachu.png" alt="substitution image for logo">
        <nav class="header-main-nav">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a class="header-gallery" href="gallery.html">GALLERY</a>
                    <ul>
                        <li><a href="##">Scenery</a></li>
                        <li><a href="##">Pet</a></li>
                        <li><a href="##">Portrait</a></li>
                        <li><a href="##">Poster</a></li>



                    </ul>
                
                </li>
                <li><a class="header-aboutMe" href="aboutMe.html">ABOUT ME</a></li>
                <li><a class="header-contact" href="mailto:tjun@purdue.edu">CONTACT</a></li>
      
            </ul>
        </nav>
    </div>
    
    <div class="header-main-rc">
        <form action="" method="post">
            <input required type="text" name="search" placeholder="Search..">
            <button type="submit"><img src="img/search.png" alt="search button"> </button>

        </form>



        <a target="_blank" href="https://www.facebook.com"> <div class="header-main-rc-fg"></div> </a>
        <a target="_blank" href="https://www.youtube.com"><div class="header-main-rc-yt"></div></a>
        <a target="_blank" href="https://github.com/TaesukJun"><div class="header-main-rc-gh"></div></a>
        <div class="burger-menu-btn"></div>
    </div>
</header>

<div class="header-margin">
    <!-- header margin -->
</div>
<div id="isSub" class="isSub"></div>

`);
