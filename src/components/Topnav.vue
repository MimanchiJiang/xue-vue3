<template>
    <div class="topnav">
        <div class="logo">
            <svg class="icon">
                <use xlink:href="#icon-xue"></use>
            </svg>

        </div>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <span class="toggleAside" @click="toggleMenu">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan"></use>
            </svg>
        </span>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible') //get
        const toggleMenu = () => {
            asideVisible!.value = !asideVisible!.value
        }
        return {
            toggleMenu
        }
    },
}
</script>
<style lang="scss" scoped>
$color: #1bb9b2;

.topnav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        width: 32px;
        height: 32px;
        background: fade-out(black, 0.9);
    }

    @media (max-width:500px) {
        >.menu {
            display: none;

        }

        >.logo {
            margin: auto 0;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>