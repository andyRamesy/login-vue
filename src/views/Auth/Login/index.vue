<template>
    <div class="login">
        <CardContainer cardType="main" class="login__content">
            <div v-for="(item, index) in loginData" :key="index">
                <Input :placeholder="item.placeholder" />
            </div>
            <div class="login__btnContainer">
                <Button>
                    <span>Login</span>
                </Button>
            </div>
        </CardContainer>
    </div>
</template>

<script lang="ts" setup> 
    import { loginData } from "./data";
    import CardContainer from "@/components/common/CardContainer/CardContainer.vue";
    import Input from "@/components/common/Input/Input.vue";
    import Button from "@/components/common/Button/Button.vue";
</script>

<style lang="scss" scoped>
    .login {
        @apply w-full h-[100vh] flex justify-center items-center;
        
        &__content{
            @apply flex flex-col gap-[25px] w-[300px];
        }

        &__btnContainer{
            @apply flex justify-center items-center;
        }
    }
</style>
