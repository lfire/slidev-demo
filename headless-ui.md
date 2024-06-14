---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# background: /bg/_f439bcb2-6acf-40cc-a79c-79a089635b76.jpeg
# background: ./bg/_966fd0c7-591b-499e-b472-5cdfad5eed4d.jpeg
# some information about your slides, markdown enabled
title: 新的UI解题泛式
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
canvasWidth: 1200
hideInToc: true
# colorSchema: dark
exportFilename: "headless-ui"
routerMode: hash
---

<div class="pt-28"></div>

# 一种新的UI解题泛式

## headless UI

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer bg-gray bg-opacity-10" hover="bg-white bg-opacity-10">
    一起探讨 <carbon:arrow-right class="inline"/>
  </span>
</div>

---
hideInToc: true
layout: image-right
image: https://cover.sli.dev
---

# 目录

<Toc v-click class="flex flex-grow mt-12px" columns="2" minDepth="1" maxDepth="2"/>

---

# 首先理解一下Headless

### 什么是Headless？

<h3 class="flex items-center justify-center text-center p-10 items-stretch">
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless computer</span>
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless software</span>
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless linux</span>
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless browser</span>
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless CMS</span>
  <span v-click class="p-2 m-3 w-50 bg-blueGray border-rounded">headless UI</span>
</h3>

<v-click>

- **headless computer:** 是指没有显示器、键盘和鼠标的计算机。
- **headless software:** 是指没有用户界面的软件。
- **headless linux:** 是指没有图形界面的linux系统。
- **headless browser:** 是指没有图形用户界面的浏览器。
- **headless CMS:** 是指没有前端界面的内容管理系统。
- **headless UI:** 是指没有样式的UI组件。

</v-click>

<h2 class="mt-10 flex items-center justify-center text-center">
  <span v-click class="p-2 m-3 w-40 bg-blue border-rounded-md">head</span>
  <span v-click class="p-2 m-3 w-20 bg-gray border-rounded-md">+</span>
  <span v-click class="p-2 m-3 w-40 bg-blue border-rounded-md">less</span>
</h2>

---
layout: two-cols
layoutClass: gap-6
---

# Headless UI

<div m-t="4"></div>

reactnext@2022 就已有较为系统的Headless UI讨论。

<v-click>

- [React Hooks 是在 V16.8 版本诞生@2019](https://github.com/facebook/react/releases/tag/v16.8.0)
- Hooks之前，组件极易发展到失控的程度
  - 组件的逻辑和UI耦合在一起
  - 复杂组件难以维护和复用
- React Hooks给了Headless UI一个新范式的可能性
  - 提供了一个将UI组件和逻辑分离的方式
  - 使得UI组件更加灵活和可复用

</v-click>

<div class="flex items-center justify-between text-center">
  <div v-click class="w-50 p-2 m-3 bg-green border-rounded-md position-relative">Hooks<br>组件状态逻辑</div>
  <div v-click>
    <div class="w-30 p-2 m-3 h-1px border-b-blue b-b-1px p-b-30px m-b-1px transform-rotate-150"></div>
    <div class="w-30 p-2 m-3 h-1px border-b-blue b-b-1px p-b-30px m-b-45px">复用</div>
    <div class="w-30 p-2 m-3 h-1px border-b-blue b-b-1px p-b-30px m-t-1px transform-rotate-30"></div>
  </div>
  <div v-click class="position-relative">
    <div class="w-40 p-2 m-8 bg-blue border-rounded-md">组件A</div>
    <div class="w-40 p-2 m-8 bg-blue border-rounded-md">组件B</div>
    <div class="w-40 p-2 m-8 bg-blue border-rounded-md">组件C</div>
    <div class="w-40 p-2 m-8 bg-blue border-rounded-md">组件...</div>
  </div>
</div>

::right::

# &nbsp;

<img src="/assets/img/headless-ui/headless-ui-reactnext.png" alt="headless UI" class="w-full"/>

https://x.com/HamatoYogi/status/1541764349131472897

---

# 常规UI组件 => Headless UI组件

<div class="flex justify-between items-center text-center p-10">
  <div v-click class="flex flex-col items-center justify-around w-400px h-400px border-rounded-full bg-blue p-10">
    <h3>常规UI组件</h3>
    <div class="flex items-center justify-around w-full">
      <div class="w-100px h-100px border-rounded-full bg-pink flex items-center justify-center">DOM</div>
      <div class="w-100px h-100px border-rounded-full bg-cyan flex items-center justify-center">style</div>
    </div>
    <div class="w-100px h-100px border-rounded-full bg-green flex items-center justify-center">状态逻辑</div>
  </div>
  <div v-click class="flex flex-col items-center justify-around w-400px h-400px border-rounded-full bg-blue p-10">
    <h3>Headless UI组件</h3>
    <div class="flex items-center justify-around w-full">
      <div class="w-100px h-100px border-rounded-full bg-pink flex items-center justify-center">DOM</div>
      <!-- <div class="w-100px h-100px border-rounded-full bg-cyan flex items-center justify-center">style</div> -->
    </div>
    <div class="w-100px h-100px border-rounded-full bg-green flex items-center justify-center">交互逻辑</div>
  </div>
</div>

<v-click>
组件中【状态逻辑】可拆分为【交互逻辑】和【业务逻辑】，其中的业务逻辑完全可以以Hooks的形式向外拆分；而另一部分是样式，这部分的实现则可以选择完全的抽离。
</v-click>

---
layout: two-cols
layoutClass: gap-6
---

# 分析一个组件：Counter

<div m-t="4"></div>

<v-click>

- 状态
  - count
  - focused
- 逻辑
  - increment：点击增加
  - decrement：点击减少
  - max & min：最大最小值限制
  - focus & blur：聚焦和失焦
  - Accessibility：键盘操作
  - mouseScroll：鼠标滚动
  - longPress：长按
  - ...

</v-click>

<v-click>
<!-- ./components/Counter.vue -->
<Counter :count="10" :focus="false" class="mt-20" />
</v-click>

::right::

<div class="flex gap-1 flex-col overflow-auto">
  <div class="flex items-stretch justify-around gap-1">
    <img src="/assets/img/headless-ui/7d2388f9aff292bd5bb82a078c8440b4.jpg" alt="counter" class=""/>
    <img src="/assets/img/headless-ui/149690d85c307e3157b726b455a7bde3.jpg" alt="counter" class=""/>
  </div>
  <div class="flex items-stretch justify-around gap-1">
    <img src="/assets/img/headless-ui/d701f400fa4ce9173ae4d48b75e8dccd.jpg" alt="counter" class="w-full"/>
    <img src="/assets/img/headless-ui/Screenshot_2024-06-14-13-51-00-193_com.taobao.taobao-edit.jpg" alt="counter" class="w-full"/>
  </div>
  <div></div>
</div>

---

# 可能的实现代码

```vue {*|18-28|31-43|1-16}{maxHeight:'550px'}
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
```

---

<div class="flex items-stretch justify-around">
<div class="w-40%">

# 一种headless方案实现

```vue
<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from "radix-vue";
import { Icon } from "@iconify/vue";
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
```

<!-- ./components/NumberInputHl.vue -->
<NumberInputHl class="float-left mt-2" />

</div>

<div class="w-55%">

# &nbsp;

```vue {*}
<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement,
         NumberFieldInput, NumberFieldRoot } from "radix-vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <NumberFieldRoot 
    id="age" class="text-sm text-white" :min="0" :default-value="18" 
  >
    <label for="age">Age</label>
    <div class="mt-1 flex items-center border rounded-md">
      <NumberFieldDecrement class="p-2 disabled:opacity-20">
        <Icon icon="radix-icons:minus" />
      </NumberFieldDecrement>
      <NumberFieldInput
        class="bg-transparent w-20 tabular-nums focus:outline-0 p-1 text-center"
      />
      <NumberFieldIncrement class="p-2 disabled:opacity-20">
        <Icon icon="radix-icons:plus" />
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>
```

<!-- ./components/NumberInput.vue -->
<NumberInput class="float-left mt-2" />

</div>
</div>

[Radix Vue: Unstyled, accessible components for building high‑quality design systems and web apps in Vue.](https://www.radix-vue.com/)

---

# Most Popular Projects: shadcn/ui

https://risingstars.js.org/2023/en

![most popular projects](/assets/img/headless-ui/most-popular-js.png)

<div v-click class="absolute border-dashed border-red border-rounded border-3 h-40px w-510px top-220px right-75px z-1"></div>

---

# 一个重要思想：不提供组件库，只提供组件集合

<div class="mt-10"></div>

为什么不提供组件库？

<div class="mt-10"></div>

https://www.shadcn-vue.com/docs/introduction.html#-why-not-packaged-as-a-dependency-
> The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.
>
> Start with some sensible defaults, then customize the components to your needs.
>
> One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.

<div class="mt-10"></div>

- 代码资产的完全掌控权
- 可以根据自己的需求定制组件
- 样式和实现分离

---

# Headless UI 的优势&劣势

- 优势

  - 有极强大的 UI 自定义发挥空间，支持高定制扩展
  - 最大化代码复用，减小包体积
  - 对单测编写友好

- 劣势

  - 对开发者能力要求高，需要较强的组件抽象设计能力

    抽象层次越高，编写难度越大。对于这样 headless 组件，我们关注的组件 API 设计和交互逻辑抽离，这非常考验开发者的组件设计能力。

  - 使用成本大，不建议简单业务场景下铺开使用

    UI 层完全自定义，存在一定开发成本，因此需要评估好投入产出，对于没有特别高要求的 2b 业务的话，还是建议使用 Ant Design 这样自带 UI 规范的组件库进行开发。

---
layout: center
class: text-center
hideInToc: true
---

# 感谢观看

## Thank you for watching
