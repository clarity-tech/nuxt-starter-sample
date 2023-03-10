
const apiBase = useRuntimeConfig().apiBase
export default defineEventHandler(async (event) => {
    // simple TEST sample
    console.log('INTERNAL SERVER/API/HELLO called with current base url used '+ apiBase)
    
    const { data } = await (await fetch(`${apiBase}branches`)).json()

    console.log('data returning ', data)

    return {
        someData: 'works',
        branches: data,
    }
})
