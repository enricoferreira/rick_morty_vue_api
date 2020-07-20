<template>
<div>
  <Breadcrumb :path="path"/>
  
  <v-card :elevation="5">
    <v-card-title>
        {{title}}
        <v-spacer></v-spacer>                
        <v-text-field 
          v-model="search" 
          append-icon="mdi-magnify" 
          label="Search" 
          single-line 
          hide-details>
        </v-text-field>
        <v-col cols="12 px-0">
          <v-divider></v-divider>
        </v-col>
        
    </v-card-title>        
    <v-data-table 
      :headers="headers" 
      :items="api" 
      :search="search">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
      </template>
    </v-data-table>    
  </v-card>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import fetchAllDataType from '../mixins/fetchData.js';
export default {
  name: 'Personagens',
  components:{
    Breadcrumb
  },
  methods: {
    getColor(status){
      if(status === 'Alive'){
        return 'green';
      }else if(status === 'unknown'){
        return 'yellow darken-3';
      }else{
        return 'red'
      }
    }
  },
  mixins: [fetchAllDataType],
  created() {
    this.fetchAllDataType('/character');
  },
  data() {
    return {
      path: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Personagens',
          disabled: false
        }
      ],
      title: 'Personagens',
      search: '',
      headers:[
        {
          text: 'Nome Personagem',
          value: 'name',
        },
        {
          text: 'Status',
          value: 'status'
        },
        {
          text: 'Gênero',
          value: 'gender'
        },
        {
          text: 'Espécie',
          value: 'species'
        },
        {
          text: 'Episódios',
          value: 'episode.length'
        }
      ]
    }
  },
}
</script>

<style>

</style>