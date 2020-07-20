<template>
  <div>
    <v-col cols="12">
      <v-slider v-model="minEpPers" label="Mínimo Episódios Personagens" min='1' max="40" thumb-label="always"></v-slider>
    </v-col>        
    <div class="row">
      <card-chart title_card="Total Personagens" :object="dataNumber.character.result" :condition="filtroCharacter.length > 0"></card-chart>
      <card-chart title_card="Total Episódios" :object="dataNumber.episode.result" :condition="filtroCharacter.length > 0"></card-chart>
      <card-chart title_card="Total Locais" :object="dataNumber.location.result" :condition="filtroCharacter.length > 0"></card-chart>
    </div>

    <div class="row">
      <v-col cols="12">
        <v-card v-if="filtroCharacter.length > 0" :elevation="4" color="white">
          <apexchart type="bar" :options="filtroNome" :series="filtroCharacter"></apexchart>
        </v-card>
      </v-col>      
    </div>    
  </div>
</template>

<script>
import CardChart from '../components/CardChart.vue';
import dataDash from '../mixins/dataDash.js';

export default {
  name: 'Home',
  components: {
    CardChart,    
  },    
  mixins: [dataDash],
  data() {
    return {
      minEpPers: 15,  
      dataNumber:{
        character: {
          page: 1,
          result: []
        },
        episode: {
          page: 1,
          result: []
        },      
        location:{
          page: 1,
          result: []
        }
      },      
    }
  }, 
  methods: {    
    fetchDataDashNumber(path){
        fetch(`https://rickandmortyapi.com/api/${path}/?page=${this.dataNumber[path].page}`)
        .then(r => r.json())
        .then(json => {
          this.dataNumber[path].result.push(...json.results);
          if(json.info.next != null){
            this.dataNumber[path].page++;
            this.fetchDataDashNumber(path);
          }
        })
        .catch(err => console.log(err))
    },    
    },
  created() {
    Object.keys(this.dataNumber).forEach(r => this.fetchDataDashNumber(r));             
    this.loadChart();
  },
}
</script>
<style scoped>
  .overflow-auto{
    overflow: auto !important;
  }
  tspan{
    font-family: "Roboto", sans-serif !important;
  }
</style>