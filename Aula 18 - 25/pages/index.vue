<template>
  <div class="app">
    <div class="listaProdutos">
    <app-ficha-produto v-for="(artigo,index) in artigos"
    :key="index"
    :produto="artigo.produto"
    :valor="artigo.valor"
    v-on:click.native="carregaCarrinho(artigo)"
    style="cursor:pointer"/>
  </div>
  <div class="listaCarrinhoCompras">
    <br>
    <h2>Carrinho de Compras</h2>
    {{ultimaCompra | date}} - {{sum()}} €
    <app-ficha-produto v-for="(artigo,index) in carrinhoCompras"
                        :key="index"
                        :produto="artigo.produto"
                        :quantidade="artigo.quantidade"
                        :valor="+artigo.valor"
                        v-on:click.native="descarregaCarrinho(artigo)"/>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import appFichaProduto from '@/components/app-ficha-produto';
export default{
  components:{
    appFichaProduto
  }, 
  data(){
    return{
      carrinhoCompras:[],
      ultimaCompra:""
      
    }
  },
  methods:{
    carregaCarrinho(artigo){
      console.log(artigo);
   
          this.carrinhoCompras.unshift({...artigo,dataCompra:new Date()});
      this.ultimaCompra=this.carrinhoCompras[0].dataCompra;
    },
    descarregaCarrinho(index){
      this.carrinhoCompras.splice(index,1)
    },
      sum(){
    if(this.carrinhoCompras.length<1){
      return 0
    }else{
      return this.carrinhoCompras.map((a)=> Math.floor(a.valor))
      .reduce((a,b)=>{return a+b})}
      }
  },
  asyncData(){
    return axios.get('https://umartigos-e4a00.firebaseio.com/.json')
    .then((res)=>{
      return{artigos: res.data}
    })
  },
}
</script>
<style scoped>
.app{
  margin-top:4.5rem;
  display: flex;
  
  flex-direction: row;
  justify-content: space-around;
}
.listaProdutos{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.listaCarrinhoCompras{
  margin-top:1rem;
  display: flex;
  min-width: 500px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border:1px solid #06c4d1;
  background-color:#eee;
}
</style>
