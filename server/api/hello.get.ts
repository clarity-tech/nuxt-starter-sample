export default defineEventHandler(async (event) => {
    // simple TEST sample
    const { data } = await (await fetch('https://kimshospitals.com/api/branches')).json()

    return {
        someData: 'works',
        branches: data,
    }
})
