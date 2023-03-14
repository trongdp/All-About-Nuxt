<template>
    <div>
        DETAIL ID : {{ id }}
    </div>
</template>

<script setup>
    const id = useRoute().params.id
</script>

<style lang="scss" scoped>

</style>