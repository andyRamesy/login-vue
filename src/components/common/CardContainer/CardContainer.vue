<template>
    <div :class="`cardContainer__${cardType}`">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    import type { PropType } from "vue";

    const props = defineProps({
        cardType: {
            type: String as PropType<"main" | "warning" | "danger">,
            default: "main",
        },
    });
</script>

<style lang="scss" scoped>
    .cardContainer {
        &__main {
            // box-shadow: 10px 10px 10px rgba(0, 140, 255, 0.2);
            -webkit-box-shadow: 0 10px 10px #777;
            -moz-box-shadow: 0 10px 10px #777;
            box-shadow: 0 10px 10px #777;
            @apply bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-[500px] h-fit block p-[18px];
        }
        &__warning{
            -webkit-box-shadow: 0 10px 10px rgb(176, 137, 9);
            -moz-box-shadow: 0 10px 10px rgb(176, 137, 9);
            box-shadow: 0 10px 10px rgb(176, 137, 9);
            @apply bg-gradient-to-r from-amber-500 to-amber-700 rounded-t-sm w-[200px] h-fit block p-[18px];
        }
    }
</style>
