<template>
  <header class="w-full h-24">
    <div class="max-w-7xl px-8 mx-auto h-full flex items-center justify-between">
      <h2 class="text-3xl font-semibold">Art.</h2>
      <input type="text" placeholder="Buscar" class="hidden" />

      <Button :size="`w-28`" :bg="`bg-brand`" :text="'Entrar'" @open="isOpen = true"/>


      <Modal :open="isOpen" @close="isOpen = !isOpen">
        <template v-slot:header>
          <h2 class="text-xl">Entrar</h2>
        </template>

        <template v-slot:body>
          <input class="w-full" type="text" />
        </template>

        <template v-slot:footer></template>
      </Modal>
    </div>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import Button from './ui/Button.vue'

export default {
  components: { Modal, Button },
  setup() {
    const isOpen = ref(false)

    return { isOpen }
  },
}
</script>
