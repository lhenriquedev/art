<template>
  <div class="vue-modal w-full h-full fixed top-0 left-0 bg-overlay" v-show="open">
    <div class="w-[90%] h-[500px] bg-white mt-20 m-auto flex flex-col">
      <header class="mt-4 px-8 modal-header flex items-center justify-between">
        <slot name="header"></slot>
        <button class="text-3xl font-bold text-brand" type="button" @click="$emit('close')">&times;</button>
      </header>

      <section class="modal-body ">
        <slot name="body"></slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
