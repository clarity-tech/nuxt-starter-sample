<script setup>
const { someData, branches} = await $fetch('/api/hello')

console.log('log called ', someData, branches)
</script>

<template>
    <div>
        Hello you are index.vue
        <ul >
            <li v-for="branch in branches">
                {{ branch.name }}
                <pre>
                    {{ branch }}
                </pre>
            </li>
        </ul>
    </div>
</template>

<style>

pre{
    background-color: darkgrey;
}
</style>
