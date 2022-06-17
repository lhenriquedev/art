<template>
  <section class="my-12 px-8 mx-auto h-full flex flex-col items-center justify-between">
    <div
      class="md:flex md:justify-center md:gap-12 lg:px-8 lg:w-full lg:max-w-7xl lg:justify-between"
    >
      <div class="lg:max-w-lg">
        <h1 class="mb-2 lg:mb-4 text-2xl font-semibold lg:text-5xl">
          Descubra novos artistas e suas obras
        </h1>
        <p class="text-base lg:text-xl text-gray-200 mb-6">
          Uma nova geração de jovens artistas surgem
        </p>

        <Button :bg="`bg-[#222]`" :size="`w-full`" :text="'Explorar'"/>

        <div
          class="mt-10 mb-10 w-full flex gap-6 md:gap-2 lg:gap-8 justify-between lg:justify-start"
        >
          <div class="text-center">
            <p class="text-2xl text-black font-semibold">+2 mil</p>
            <span class="text-gray-200 text-base">Artistas</span>
          </div>

          <div class="text-center">
            <p class="text-2xl text-black font-semibold">+7 mil</p>
            <span class="text-gray-200 text-base">Vendas</span>
          </div>

          <div class="text-center">
            <p class="text-2xl text-black font-semibold">+16 mil</p>
            <span class="text-gray-200 text-base">Avaliações</span>
          </div>
        </div>
      </div>

      <div class="hidden md:block lg:block">
        <img src="../assets/img/hero.png" alt="Pintura de uma mulher." />
      </div>
    </div>

    <div class="w-full lg:max-w-7xl px-8 lg:pt-12 lg:grid lg:grid-cols-2 lg:gap-8">
      <div class="mt-14 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
        <img
          class="w-full"
          src="../assets/img/image-1.png"
          alt="Mulher pintando uma tela de pintura."
        />
        <img
          class="w-full"
          src="../assets/img/image-2.png"
          alt="Um quadro com uma mulher no fundo."
        />
        <img
          class="w-full"
          src="../assets/img/image-3.png"
          alt="Um quadro abstrato com pés coloridos."
        />
      </div>

      <div class="w-full mt-4 flex flex-col justify-center items-center">
        <h2 class="text-2xl md:text-3xl text-black mb-4 font-medium">
          Confira as ultimas coleções
        </h2>
        <button
          class="w-full md:w-[20rem] bg-brand py-2 text-white uppercase font-bold border-none rounded"
        >
          Ver mais.
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Button from '../components/ui/Button.vue'

export default {
  components: { Button },
}
</script>
