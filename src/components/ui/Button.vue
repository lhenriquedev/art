<template>
  <button
    :class="[size, bg]"
    class="py-2 text-white uppercase font-bold border-none rounded"
    @click="$emit('open')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
  },

  setup() {},
}
</script>
