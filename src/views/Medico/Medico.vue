<template>
    <p>MEdico</p>
    <p>{{nome}}</p>
</template>
<script>
export default {
    name: "Medico",
    data() {
        return {
            nome: 'Mathues'
        }
        
    },
    //Ao cria o component
    created(){
        setTimeout(()=>{
        this.nome = 'MAtheus Created'

        }, 1000);
    },
    mounted() {
        setTimeout(()=>{
        this.nome = 'MAtheus MOunted'

        }, 2000);
    },
 
}
</script>
<style scoped>

</style>