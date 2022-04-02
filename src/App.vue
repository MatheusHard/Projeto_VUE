<script setup>
import Home from "./views/Home.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import CadastroMedico from "./views/Medico/CadastroMedico.vue";
import Medico from "./views/Medico/Medico.vue";
import Testes from "./views/Testes.vue";


</script>


<template>
<div>
  <NavBar/>
  <Testes/>
    <Footer/>
</div>
    

</template>

<script>
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>
<style>

</style>


