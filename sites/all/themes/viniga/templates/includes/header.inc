<span id="top"></span>

<header id="masthead">
	<div class="container">
    <div class="top-band"></div>
    <section class="section-header">
	
		<!-- C.1.1. Logo -->
        <section class="section-logo">
            <a href="" rel="home" class="logo-link">
                <img src="<?php print base_path() . path_to_theme() .'/' ?>assets/images/site/logo.png" alt="CTBA Logo" class="logo" id="logo-ctba" />
            </a>
        </section>
		<!-- C.1.1. Navigation -->
		
        <nav class="nav mobi-nav" id="nav">
            <?php print theme('links__system_main_menu', array(
              'links' => $main_menu,
              'attributes' => array(
                'id' => 'nav-main',
                'class' => 'nav-main',
              ),
            )); ?>
            
            <a class="mobi-reveal reveal" href="#nav-main">
        
                <svg class="svg-burger" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" class="svg-hamburger">
                    <rect x="10" y="14" width="30" height="1"/>
                    <rect x="10" y="36" width="30" height="1"/>
                    <rect x="10" y="25" width="30" height="1"/>
                    <path d="M50,50H0V0h50V50z M49,1H1v48h48V1z"/>
                </svg>

            </a>
            
        </nav>
    </section>
	</div>
</header>