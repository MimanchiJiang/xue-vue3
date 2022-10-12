<template>
    <div class="xue-tabs">
        <div class="xue-tabs-nav" ref="container">
            <div class="xue-tabs-nav-item" @click="select(t)" :class="{selected:t== selected}"
                v-for="(t,index) in titles" :key="index" :ref="el => {if(t==selected) selectedItem = el}">
                {{t}}</div>
            <div class="xue-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="xue-tabs-content">
            <component class="xue-tabs-content-item" :class="{selected:c.props.title == selected}" v-for="c in defaults"
                :is="c" />
        </div>
    </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, onUpdated, ref } from 'vue';
export default {
    props: {
        selected: {
            type: String,
        }
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>()
        const indicator = ref<HTMLDivElement>()
        const container = ref<HTMLDivElement>()
        const x = () => {
            const { width } = selectedItem.value!.getBoundingClientRect()
            indicator.value!.style.width = width + 'px'
            const { left: left1 } = container.value!.getBoundingClientRect()
            const { left: left2 } = selectedItem.value!.getBoundingClientRect()
            const left = left2 - left1
            indicator.value!.style.left = left + 'px'
        }
        onMounted((x))
        onUpdated((x))



        //@ts-ignore
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('子标签必须是Tab组件')
            }
        })
        const titles = defaults.map((tag) => {
            //@ts-ignore
            return tag.props.title
        })
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            defaults, titles, select, selectedItem, indicator, container
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
        position: relative;

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

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
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