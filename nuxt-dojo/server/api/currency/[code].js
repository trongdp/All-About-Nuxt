export default defineEventHandler(async (event) => {
    const {code} = event.context.params;
    const {currencyKey} = useRuntimeConfig();
    const uri = ` https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`;
    const data =await $fetch(uri);
    return data;
})