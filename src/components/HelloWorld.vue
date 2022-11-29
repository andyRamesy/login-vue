<template>
    <div>
        <a-button type="primary">Primary Button</a-button>
    </div>
</template>

<script lang="ts" setup>
    import { Button as AButton } from "ant-design-vue";
    import { onMounted } from "vue";

    onMounted(() => {
        console.log("first");
    });
</script>
