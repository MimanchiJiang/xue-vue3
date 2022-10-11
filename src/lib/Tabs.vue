<template>
    <div class="xue-tabs">
        <div class="xue-tabs-nav">
            <div class="xue-tabs-nav-item" @click="select(t)" :class="{selected:t== selected}"
                v-for="(t,index) in titles" :key="index">
                {{t}}</div>
        </div>
        <div class="xue-tabs-content">
            <component class="xue-tabs-content-item" :class="{selected:c.props.title == selected}" v-for="c in defaults"
                :is="c" />
        </div>
    </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed } from 'vue';
export default {
    props: {
        selected: {
            type: String,
        }
    },
    setup(props, context) {
        //@ts-ignore
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('子标签必须是Tab组件')
            }
        })
        const current = computed(() => {
            return defaults.filter((tag) => {
                console.log('current 被重置了')
                return tag.props!.title == props.selected
            })[0]
        })
        const titles = defaults.map((tag) => {
            //@ts-ignore
            return tag.props.title
        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            defaults, titles, current, select
        }
    }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.xue-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }
    }
}
</style>