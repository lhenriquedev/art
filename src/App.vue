<template>
  <Header />
  <Hero />
  <Artists />
  <Footer />
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Artists from './components/Artists.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Hero, Artists, Footer },
}
</script>

<style></style>
