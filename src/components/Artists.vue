<template>
  <section class="max-w-7xl px-8 mt-12 mx-auto h-full flex flex-col items-center justify-between">
    <h2 class="self-start mb-6 text-2xl text-black">Artistas</h2>

    <div class="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <div class="w-full relative">
        <div class="text-white absolute top-4 left-4 z-10 flex flex-col">
          <span class="text-xl font-semibold">Sabine Lowe</span>
          <span class="text-sm">Design e Fotógrafa</span>
        </div>
        <img
          class="w-full relative"
          src="../assets/img/image-4.png"
          alt="Mulher segurando um espelho refletindo a sí mesma."
        />
      </div>

      <div class="w-full relative">
        <div class="text-white absolute top-4 left-4 z-10 flex flex-col">
          <span class="text-xl font-semibold">Eleanor Pena</span>
          <span class="text-sm">Escritora e Design</span>
        </div>
        <img
          class="w-full relative"
          src="../assets/img/image-5.png"
          alt="Mulher segurando um espelho refletindo a sí mesma."
        />
      </div>

      <div class="w-full relative">
        <div class="text-white absolute top-4 left-4 z-10 flex flex-col">
          <span class="text-xl font-semibold">Leslie Alexander</span>
          <span class="text-sm">Diretora de arte</span>
        </div>
        <img
          class="w-full relative"
          src="../assets/img/image-6.png"
          alt="Mulher segurando uma melancia."
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {}
</script>
