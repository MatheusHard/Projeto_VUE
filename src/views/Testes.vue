<template>
    <did id="nav">
        <h1 v-show="RRR">
          Home
        </h1>
        <!--If else-->
        <p v-if="joga_bola">Eu jogo bolaas vezes</p>
        <p v-else> Não seio jogarbola</p>

        <p v-if="20 > 3">20 maior q 3</p>
        <!--Ver dado sensivel-->
        <p v-show="mostrar_email">Nosso contato: {{meu_email}}</p>

        <p> <a v-bind:href="site" target="_blank">Acessar meu site</a></p>

        <img style="width: 80px; height: 80px;" :src="avatar"  :alt="nome"/>

        <!--MOstrrar e ocultar email-->
        <button @click="validar_email">{{text_button}}</button>


        <p>TEcologias com objetos</p>
        <ul>
            <li v-for="t in array_tecnologias" v-bind:key="t.id">
                {{t.name}}
            </li>
        </ul>

    </did>
</template>
<script>

export default {
    
    name: "Testes",
    data() {
        return {
            nome: 'Mathues',
            joga_bola: false,
            mostrar_email: false,
            meu_email: 'matheus@gmail.com',
            site: 'http://globo.com',
            avatar: '/src/assets/img/home.png',
            text_button: 'Mostrar Email',
            array_tecnologias: [{id: 1, name: "JAva"},{id: 2, name: "PHP"}, {id: 3, name: "VUE"}]
        }
        
    },
    methods: {
         validar_email(){
             //MOstrar e ocultar:
           this.mostrar_email = !this.mostrar_email
           if(this.mostrar_email){
            this.text_button = 'Ocultar Email'
           }else{
               this.text_button = 'Mostrar Email'
           }
       }
    },
    //Ao cria o component
    created(){
       
    },
    mounted() {

      

    },
 
} 
    

</script>
<style scoped>

</style>