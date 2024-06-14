<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  count: {
    default: 0,
  },
  focus: {
    type: Boolean,
    default: false,
  },
})

const counter = ref(props.count)
const isFocus = ref(props.focus)
</script>

<template>
  <div :class="isFocus ? 'bg-blue' : ''" flex="~" w="min" border="~ main rounded-md" @click="isFocus = true">
    <button border="r main" p="2" font="mono" outline="!none" hover:bg="gray-400 opacity-20" @click="counter -= 1">
      -
    </button>
    <input m="auto" p="2" w="20" class="text-center" type="number" v-model="counter" />
    <button border="l main" p="2" font="mono" outline="!none" hover:bg="gray-400 opacity-20" @click="counter += 1">
      +
    </button>
  </div>
</template>


<style scoped>
/* 针对Chrome、Edge和Safari */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 针对Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>