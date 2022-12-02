<template>
    <div>
        <button class="button">
            <slot />
        </button>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    interface ITheme {
        color: string;
        backgroundColor: string;
    }

    const theme = ref<ITheme>({
        color: "#f2f2f2",
        backgroundColor: "#0000",
    });

    const props = defineProps({
        width: String,
        theme: {
            type: String,
        },
    });
</script>

<style lang="scss" scoped>
    .button {
        background-color: #e1ecf4;
        border-radius: 3px;
        border: 1px solid #7aa7c7;
        box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
        box-sizing: border-box;
        color: #39739d;
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        margin: 0;
        outline: none;
        padding: 8px 0.8em;
        position: relative;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        white-space: nowrap;
    }
</style>
