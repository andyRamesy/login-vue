<template>
    <div class="input">
        <!-- <label for="">{{ label }}</label> -->
        <a-input
            @input="handleInput"
            :name="nameInput"
            :bordered="false"
            v-model:value="value"
            :placeholder="placeholder"
            class="input__field"
        />
    </div>
</template>

<script lang="ts" setup>
    import AInput from "ant-design-vue/lib/input";
    import { emit } from "process";
    import { ref } from "vue";

    const props = defineProps({
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        nameInput: {
            type: String,
        },
    });

    let value = ref<string>("");

    const emit = defineEmits<{
        (event: "input", value: object): void;
    }>();

    const handleInput = (event: Event) => {
        const value = {
            [(event.target as HTMLInputElement).name]: (
                event.target as HTMLInputElement
            ).value,
        };
        emit("input", value);
    };
</script>

<style lang="scss" scoped>
    .input {
        border-bottom: 1px solid rgb(64, 1, 1);
        @apply flex flex-col;
    }
</style>
