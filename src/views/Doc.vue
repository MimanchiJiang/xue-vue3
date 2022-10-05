<template>
    <Topnav />
    <div class="content">
        <aside>边栏</aside>
        <main>主内容</main>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/topnav.vue'
export default {
    components: { Topnav }
}
</script>