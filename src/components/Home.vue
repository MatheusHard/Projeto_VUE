<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>




<template>
    <div>
        <h1>{{title}}</h1>
    </div>
    
    <div>
        <router-link  to="/hello">API</router-link>
    </div>

    <form id="cadastro_adm" @submit="createAdm">
    <div class="input-container">
	<label for="name">Nome</label>
	<input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o nome">
    </div>

    <div class="input-container">
	    <label for="name">Perfil: </label>
	    <select name="teste" id="teste" v-model="myProfissional">
	        <option key value="">Selecione o Tipo Medico</option>
	        <option v-for="m in array_perfil" :key="m.id" :value="m">{{m.nome}}</option>
	    </select>
    </div>

     <div class="input-container">
	    <label for="name">Especialidade: </label>
	    <select name="teste" id="teste" v-model="teste">
	        <option key value="">Selecione a Especialidade</option>
	        <option v-for="e in myProfissional.tipo_especialidade" :key="e.id" :value="e.tipo">{{e.tipo}}</option>
	    </select>
    </div>

    <div class="input-container">
	    <label for="name">Perfil: </label>
	    <select name="teste" id="teste">
	        <option key value="">Selecione o Tipo Medico</option>
	        <option v-for="m in temp_especialistas" :key="m.id" :value="m">{{m.nome}}</option>
	    </select>
    </div>
    <div>{{myProfissional}}</div>

    <div style="margin-top: 20px">
        <input type="submit" class="submit-btn" value="Criar Adm">
    </div>
  </form>
</template>
<script>
export default {
  
  el: "#medico",
  data() {
    return {
      title: 'Cadastro ADM!',
      nome: null,
      myProfissional: [],
      temp_especialistas: null,
      array_perfil: [],
      /*array_perfil: [
          {
              id: 1,
              nome: "Medico Clinico",
              CBO: "120"},
          {
              id: 2,
              nome: "Medico Especialista",
              CBO: "221",
              tipo_especialidade:
              [
                  {id: 1, tipo: "neuro"},
                  {id: 2, tipo: "ginecologista"},
                  {id: 3, tipo: "proctologista"}
              ]
              },
      ],*/
      array: [
          {id: 1, nome: "Matheus", age: 50},
          {id: 2, nome: "Wilson", age: 130},
          {id: 3, nome: "Luiz", age: 220},
                
      ]
    }
  },
     methods:{
      
   async getApis() {
      //const req = await fetch('http://localhost:3000/ingredientes')
      
      const req = await fetch('/db/db.json');
      const data = await req.json();

      this.temp_especialistas = data;

      this.array_perfil = data.array_perfis;
      console.log("Desntro do GET");
      console.log(this.temp_especialistas);
      },
  


     
    
  },
 
  
  mounted(){
    this.getApis();
  }

}

</script>

<style scoped>


#adm-form{
max-width: 700px;
margin: 0 auto;
}

.input-container{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
label{
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #FCBA03 
}

input, select{
padding: 5px 10px;
width: 300px;
}
#opcionais-container{
flex-direction: row;
flex-wrap: wrap;

}

#opcionais-title{
width: 100%;
}
.check-box-container{
display: flex;
align-items: flex-start;
width: 50%;
margin-bottom: 20px;
}

.submit-btn{
background-color: #222;
color: white;
font-weight: bold;
border: 2px solid #222;
padding: 10px;
font-size: 16px;
margin: 0 auto;
cursor: poiter;
transition: .5s;

}
.submit-btn:hover{
    background-color: transparent;
    color: #222;
}
</style>