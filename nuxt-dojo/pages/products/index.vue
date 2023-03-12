<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
        layoutTransition: { name: 'layout', mode: 'out-in' }
    })

    const {data : products} = await useFetch("https://fakestoreapi.com/products")

    useHead({
        title:'Nuxt Dojo | Merch',
        meta: [
            {name: "description", content: 'Nuxt 3 Merch'},
        ]
    })
</script>
 
<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>