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
              <li class="active"><a href="services.php">Login/Cadastrar-se</a></li>
            </ul>
            <a href="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Fim Menu -->

    <div class="hero page-inner overlay" style="background-image: url('images/hero_bg_1.jpg')">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-9 text-center mt-5">
            <h1 class="heading" data-aos="fade-up">Cadastrar</h1>
          </div>
        </div>
      </div>
    </div>
    
   <!-- Section: Design Block -->
    <section class="">
      <!-- Jumbotron -->
      <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight">
                Registre-se e encontre<br />
                <span class="text-primary"> seu Imómel ideal na plataforma</span>
              </h1>
              <p style="color: hsl(217, 10%, 50.8%)">
                seus dados pessoais estão sendo prodejidos por tecnoligia de ponta, 
                e as imobiliarias são de confiança
              </p>
            </div>

            <div id="formRegister" class="col-lg-6 mb-5 mb-lg-0 ">
              <div class="card shadow-lg">
                <div class="card-body py-5 px-md-5">
                  <form>
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" />
                          <label class="form-label" for="form3Example1">Primeiro nome</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" />
                          <label class="form-label" for="form3Example2">Ultimo nome</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" />
                          <label class="form-label" for="form3Example1">CPF</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" />
                          <label class="form-label" for="form3Example2">RG</label>
                        </div>
                      </div>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" />
                      <label class="form-label" for="form3Example3">Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline">
                      <input type="password" id="form3Example4" class="form-control" />
                      <label class="form-label" for="form3Example4">Senha</label>
                    </div>

                    <!-- Submit button -->
                    <button id="btnRegister" class="btn btn-primary btn-block mb-4">
                      Inscrever-se
                    </button>

                  </form>
                </div>
              </div>
            </div>

            <div id="formLogin" class="col-lg-6 mb-5 mb-lg-0">
              <div class="card shadow-lg">
                <div class="card-body py-5 px-md-5">
                  <form>
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example1" class="form-control" />
                          <label class="form-label" for="form3Example1">Primeiro nome</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="form3Example2" class="form-control" />
                          <label class="form-label" for="form3Example2">Ultimo nome</label>
                        </div>
                      </div>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline ">
                      <input type="password" id="form3Example4" class="form-control" />
                      <label class="form-label" for="form3Example4">Senha</label>
                    </div>

                    <div class="d-flex d-inline-flex p-3 col-12">
                      <span id="CreateRegister" style="color: #4169E1; cursor: pointer;">Não possue uma conta ? Registre-se</span>
                    </div>

                    <!-- Submit button -->
                    <button id="btnLogin" class="btn btn-primary btn-block mb-4">
                     <a href="index.php" style="color: white">Logar</a> 
                    </button>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->

    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>Contato</h3>
              <ul class="list-unstyled links">
                <li><a id="aa" href="tel://11234567890">+55 (17) 97456-3590</a></li>
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
    <script src="js/jquery-3.6.1.js"></script>
    <!-- Js da Pagina -->
    <script src="js/register.js"></script>
  </body>
</html>
