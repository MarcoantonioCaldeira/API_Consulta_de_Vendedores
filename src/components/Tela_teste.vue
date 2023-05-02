<template>
  <div class="home">
   <h1>Nome do Vendedor</h1>
   <input type="text" v-model="cod_vendedor" v-on:change="Get_Nome" placeholder="Codigo do vendedor">

   <div id="resultado"  v-if="cod_vendedor_data != null">
    
    Nome do Vendedor: {{cod_vendedor_data.nome}}
    
   </div>
  </div>
</template>

<script>
import Tela_teste from '@/components/Tela_teste.vue';
// import { assertExpressionStatement } from '@babel/types';
import api from './api';

export default{
  name: 'Tela_teste',
  components: {
    Tela_teste
  },

  data(){
    return{
      cod_vendedor: "",
      cod_vendedor_data: null,
      cod_vendedor_keys: []
    }; 
  },
  created() {
    this.Get_Nome();
  },

  methods:{

    Get_Nome(){

      var self = this;

      api.get("/vendedores?cod_vendedor=" + self.cod_vendedor)
      .then((response) => {

        console.log(response);
        self.cod_vendedor_data = response.data;
        self.cod_vendedor_keys = Object.keys( self.cod_vendedor_data );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(function () {

      });     
    }
  }
};
</script>

<style>

#resultado{
    width: calc(101% - 110px);
    height: 500px;
    background-color: rgb(206, 205, 205);
    margin-left: 2%;
    border-radius: 5px;
  }

</style>
