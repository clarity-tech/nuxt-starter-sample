<script setup>
// const { someData, branches} = await $fetch('/api/hello')

const { data } = await useFetch('/api/hello', { pick: ['someData', 'branches'] })
//we should use this as preferred and use the keys as BEST practices as below
// https://nuxt.com/docs/getting-started/data-fetching#best-practices

console.log('index called ', data.value.someData, ' branches', data.value.branches)

</script>

<template>
    <div>
        Hello you are index.vue {{ data.someData }}
        <ul >
            <li v-for="branch in data.branches">
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
