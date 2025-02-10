<script setup>

</script>

<template>

  <div class="container login-container " style="width: 500px;">
    <div class="row">
      <div class="col-md-6 ads ">
        <span id="fl"><img src="./assets/logo.png" class="<img img-fluid"></span>
      </div>
      <div class="col-md-6 login-form">
       
          <div class="profile-img m-3">
            <img src="./assets/logo.png" style="width: 200px;">
          </div>

          <form>
          <div class=" mb-3 input-group">
            <span class="input-group-text"><i class="fas fa-user"></i></span>
            <input type="text" class="form-control" name="username" placeholder="Usuario">
          </div>
          <div class="input-group">
            <span class="input-group-text"><i class="fas fa-lock"></i></span>
            <input type="text" class="form-control" name="password" placeholder="Contraseña">
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="button-7 small-button m-4 pb-2 ">Iniciar</button>
          </div>

          <div class="form-group forget-password m-2 ">
            <a href="#">¿Olvidaste la contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  
</template>
