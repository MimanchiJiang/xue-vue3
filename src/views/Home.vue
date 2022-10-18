<template>
    <div class="topNavAndBanner">
        <Topnav />
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/MimanchiJiang/xue-vue3">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-typescript"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>

    </div>


</template>
<script lang="ts">
import Topnav from "../components/topnav.vue"
export default {
    components: { Topnav }
}
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #1bb9b2;


.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (min-width: 800px) {
        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width: 1200px) {
        width: 1200px;

        >ul {
            >li {
                width: 33.333333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }

        }
    }
}

.topNavAndBanner {
    background: url(../assets/sky.png);
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
    /* background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%); */
    clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
    /* color: $color; */
    color: #fff;
    padding: 300px 0;
    margin-right: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 15px;
            /* background: $green; */
            background: rgb(138, 193, 231);
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;
            color: white;
            font-size: 20px;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>