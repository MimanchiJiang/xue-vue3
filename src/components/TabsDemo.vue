<template>
    <h1>Tabs 示例</h1>
    <Demo :component="Tabs1Demo"></Demo>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tabs1Demo
        }
    }
}

</script>
<style lang="scss" scoped>
h1 {
    text-shadow: 0 2px 6px rgb(0 0 0 / 20%);
}
</style>