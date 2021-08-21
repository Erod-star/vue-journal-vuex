<template>
  <div class="entry-title d-flex justify-content-between p-2">

      <div>
          <span class="text-success fs-3 fw-bold">20</span>
          <span class="mx-1 fs-3">Agosto</span>
          <span class="mx-2 fs-4 fw-light">2021, viernes</span>
      </div>

      <div>
          <button class="btn btn-danger mx-2">
              Borrar
              <i class="fa fa-trash-alt"></i>
          </button>

          <button class="btn btn-primary">
              Subir foto
          </button>
      </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
      <textarea 
      placeholder="El día de hoy..."
      ></textarea>
  </div>

  <Fab 
    icon="fa-save"
  />

  <img
    src="https://p4.wallpaperbetter.com/wallpaper/264/79/658/statue-of-david-marble-rolex-gold-watch-space-stars-wallpaper-preview.jpg"
    alt="Foto de usuario"
    class="img-thumbnail">

</template>


<script>

import { defineAsyncComponent } from 'vue'

export default {
    components:{
        Fab: defineAsyncComponent( () => import('../components/Fab.vue'))
    }
}
</script>


<style lang="scss" scoped>

textarea {
    border: none;
    font-size: 20px;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px, 5px, 10px rgba($color: #000000, $alpha: 0.2);
}

</style>