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

        <!--TESTES RADIO BUTTONS-->
        <div class="container">
            <form action="">
                <h1>Ficha de Anaminese</h1>
                <div class="container-itens-radios">
                <h2>Anemia   </h2>
                <label class="label">
                    <input type="radio" id="" name="a1"/>
                    <span class="span">SIM</span>
                </label>

                <label class="label">
                    <input type="radio" id="" name="a1"/>
                    <span class="span">NÃO</span>
                </label>
                </div>
            </form>
        </div>


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

*,
*:after,
*:before{
box-sizing: border-box;
}
.container{
    /*height: 300vh;*/
    height: 100%;
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
}
.container-itens-radios{
    align-content: space-between;
    align-items: stretch;
    display: flex;
    
}
input[type="radio"]{
    display: none;
}
.label{
    display: block;
    cursor: pointer;
       font-weight: 500;
    margin-bottom: 10px;
   
}

.span{
    display: inline-flex;
    align-items: center;
    padding: 10px 20px 10px 10px;
    border-radius: 31px;
    transition: .25s ease;
    
    }
.span:hover,
input[type="radio"]:checked + .span{
    background-color: #d6d6e5;
}

.span::before{
    content: "";
    background-color: #fff;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
    transition: .25s ease;
    box-shadow: inset 0 0 0 2px #00005c;
}
input[type="radio"]:checked + .span::before{
box-shadow: inset 0 0 0 10px #00005c;
}



</style>