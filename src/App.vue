<script setup>

</script>

<template>

  <div class="container login-container " style="width: 500px;">
    <div class="row">
      <div class="col-md-6 ads ">
        <span id="fl"><img src="./assets/logo.png" class="<img img-fluid "></span>
      </div>
      <div class="col-md-6 login-form">
        <div class="profile-img">
          <img src="./assets/logo.png"  style="width: 150px;">
        </div>
       
        <form>
          <div class="form-group">
            <input type="text" class="form-control m-2" name="username" placeholder="Usuario">
          </div>
          <div class="form-group">
            <input type="text" class="form-control m-2" name="password" placeholder="Contraseña">
          </div>
          <div class="form-group">
            <button type="button" class="m-2">Iniciar</button>
          </div>
          <div class="form-group forget-password m-2 ">
            <a href="#">Olvidaste la contraseña</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <main>
    <TheWelcome />
  </main>
</template>
