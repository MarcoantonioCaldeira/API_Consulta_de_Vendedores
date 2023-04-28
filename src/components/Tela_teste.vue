<template>
  <div class="home">
   <h1>Nome do Vendedor</h1>
   <input type="text" v-model="cod_vendedor" v-on:change="Get_Nome" placeholder="Codigo do vendedor">

   <div v-if="cod_vendedor_data != null">

    <br>Nome do Vendedor: {{ cod_vendedor_data.nome }}
    
   </div>

  </div>

  <!-- <h1>Clique aqui para ver os dados</h1>

  <button v-on:click="Get_Vendedores_Dados">Clique aqui</button> -->
</template>

<script>
import Tela_teste from '@/components/Tela_teste.vue';
import axios from 'axios'
import api from './api';

export default{
  name: 'Tela_teste',
  components: {
    Tela_teste
  },

  data(){
    return{
      cod_vendedor: "",
      cod_vendedor_data: null
    }; 
  },
  created() {
    this.Get_Nome();
  },

  methods:{

    Get_Nome(){

      var self = this;

      api.get("/vendedores?cod_vendedor=" + this.cod_vendedor)
      .then((res) => {

        console.log(res);
        self.cod_vendedor_data = res.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(function () {

      });
    },


    // Get_Vendedores_Dados(){
      
    //   var self = this;

    //   api.get("/vendedores")
    //   .then((res) => {

    //     console.log(res);
    //     self.cod_vendedor_data = res.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(function () {

    //   });
    // }
  }
};
</script>
