<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue';


export default {
  name: 'App',
  setup() {
    const asideVisible = ref(false)
    provide('asideVisible', asideVisible) //标记 子组件可以使用
  }
}
</script>
