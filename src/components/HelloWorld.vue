<template>
    <div>
        <Button>qsdfqsdf</Button>
    </div>
</template>

<script lang="ts" setup>
    import Button from "@/components/common/Button/Button.vue";
    import { onMounted } from "vue";

    onMounted(() => {
        console.log("first");
    });
</script>
