<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue';


export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth

    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible) //标记 子组件可以使用
  }
}
</script>
