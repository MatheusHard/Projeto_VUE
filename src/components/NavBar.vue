<template>
    <did id="nav">
       <ul >
           <li v-for="(l, index) in array_li" v-bind:key="index">
              <a href="#">{{l}}</a> 
            </li>
       </ul>
       
    </did>
</template>
<script>

export default {
    
     name: 'NavBar',
     data() {
         return {
             array_li:['Home','Medico', 'Administrador']
         }
     },   
    
}
</script>
<style scoped>

ul{
    list-style: none;
    display: flex;
    align-content: space-around; 
    background-color: blue;
     margin: 0;
  padding: 0;
    

}
li{
    margin-right: 10px;
    
}
a{
    color: #DDD;
    text-decoration: none;
    transition: .3s;
}
a:hover{
    color: turquoise;
}
</style>


