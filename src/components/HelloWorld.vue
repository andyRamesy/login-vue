<template>
    <v-container>
        <v-btn> btn </v-btn>
        <v-avatar color="indigo">
            <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
    </v-container>
</template>

<script lang="ts" setup>
    import { onMounted } from "vue";

    onMounted(() => {
        console.log("first");
    });
</script>
