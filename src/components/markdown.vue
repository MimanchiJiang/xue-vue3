<template>
    <article class="markdown-body markdown" v-html="content">
    </article>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const content = ref<string>()
        import(props.path).then(result => {
            content.value = result.default
        })
        return { content }
    }

}
</script>
<style lang="scss" scoped>
.markdown {
    font-size: 16px;
    padding: 10px 0 10px 15px;
}
</style>