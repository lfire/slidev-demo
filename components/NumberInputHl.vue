<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'radix-vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <NumberFieldRoot id="age" :min="0" :default-value="18">
    <label for="age">Age</label>
    <div>
      <NumberFieldDecrement>
        <Icon icon="radix-icons:minus" />
      </NumberFieldDecrement>
      <NumberFieldInput />
      <NumberFieldIncrement>
        <Icon icon="radix-icons:plus" />
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>