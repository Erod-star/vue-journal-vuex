<template>
    <div
      class="entry-container mb-3 pointer p-2"
      @click="$router.push({ name: 'entry', params:{id: 14} })"
    >

        <!-- Título -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">22</span>
            <span class="mx-1 fs-5">enero</span>
            <span class="mx-2 fw-light">2024, viernes</span>
        </div>

        <div class="entry-description">
            Aliqua pariatur et nulla ipsum occaecat consectetur pariatur deserunt consequat laborum aliquip. Dolore irure magna ut in non non nostrud consequat sint eu reprehenderit nostrud ad tempor. Aliquip incididunt Lorem qui reprehenderit nisi exercitation qui cillum duis laboris.  
        </div>
    </div>
</template>


<script>
export default {

}
</script>


<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;
    
    &hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}


</style>