<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Untree.co" />
    <link rel="shortcut icon" href="favicon.png" />

    <meta name="description" content="" />
    <meta name="keywords" content="bootstrap, bootstrap5" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="fonts/icomoon/style.css" />
    <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />

    <link rel="stylesheet" href="css/tiny-slider.css" />
    <link rel="stylesheet" href="css/aos.css" />
    <link rel="stylesheet" href="css/style.css" />

    <title>
      Nacional W Imóveis
    </title>
  </head>
  <body>
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

      <!-- Menu -->
      <nav class="site-nav">
      <div class="container">
        <div class="menu-bg-wrap">
          <div class="site-navigation">
            <a href="index.php" class="logo m-0 float-start">Nacional W Imóveis</a>
            <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
              <li><a href="index.php">Home</a></li>
              <li><a href="properties.php">Imóveis</a></li>
              <!-- <li><a href="about.php">About</a></li> -->
              <li><a href="contact.php">Contate-nos</a></li>
              <li><a href="services.php">Login/Cadastrar-se</a></li>
            </ul>
            <a href="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Fim Menu -->

    <div class="hero page-inner overlay" style="background-image: url('images/hero_bg_3.jpg')">
    </div>

    <div class="section">
      <div class="container">
        <div class="row justify-content-between">
          <!-- Imagens do Carousel -->
          <div class="col-lg-7">
            <div class="img-property-slide-wrap">
              <div class="img-property-slide">
                <img src="images\the_One_Bel_Air_nos_Estados_Unidos.jpg" alt="Image" class="img-fluid" />
                <img src="images\green_gables_2.jpg" /> 
                <img src="images\green_gables_3.jpg" />
              </div>
            </div>
          </div>
          <!-- Fim do Carousel -->
          <div class="col-lg-4">
            <!-- Informação do Imóvel -->
            <h2 class="heading text-primary">Mansão, possuiu garagem para carros pequenos.</h2>
            <p class="meta">Woodside, Califórnia</p>
            <p class="text-black-50">
            Esta propriedade de 74 acres localizada no Vale do Silício e há trinta minutos de carro da cidade de São Francisco é sem dúvida de cair o queixo. Ela era a casa do magnata e filantropo Mortimer Fleishhacker Sr. e conta com diversas casas, totalizando 32 quartos, jardins que deixariam Maria Antonieta com inveja e até mesmo um piscina romana.
            </p>
            <!-- Fim Informação do Imóvel -->

            <div class="d-flex d-inline-flex d-block agent-box col-12">
              <div class="d-flex justify-content-center col-6 pt-3">
                <h5 style="color: green">R$ 120.000.000</h5>
              </div>
              <div class="d-flex justify-content-center col-6">
                <button type="button" class="btn btn-success">Comprar</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

<!-- Roda pé -->
<div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>Contato</h3>
              <ul class="list-unstyled links">
                <li><a href="tel://11234567890">+55 (17) 97456-3590</a></li>
                <li><a href="tel://11234567890">+55 (17) 98456-7875</a></li>
                <li>
                  <a href="mailto:info@mydomain.com">nacionalI.contato@mydomain.com</a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="widget">
              <h3>Fonte</h3>
              <ul class="list-unstyled float-start links">
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Privacidade</a></li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="widget">
              <h3>Links</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Contact us</a></li>
              </ul>

              <ul class="list-unstyled social">
                <li>
                  <a href="#"><span class="icon-instagram"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
              </ul>
            </div>
            <!-- /.widget -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

      </div>
      <!-- /.container -->
    </div>
    <!-- /.site-footer -->

    <!-- Preloader -->
    <div id="overlayer"></div>
    <div class="loader">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/tiny-slider.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/counter.js"></script>
    <script src="js/custom.js"></script>
  </body>
</html>
