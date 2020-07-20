<template>  
<div>
  <breadcrumbs :path="path"></breadcrumbs>
    <v-card>
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
        </v-card-title>                
      <v-data-table
      :headers="headers"
      :items="api"
      :search="search">
      </v-data-table>
    </v-card>

</div>
  
</template>

<script>
import Breadcrumbs from '../components/Breadcrumb.vue';
import fetchData from '../mixins/fetchData.js';
export default {
    name: 'Episodios',
    mixins: [fetchData],
    created() {
        this.fetchAllDataType('/episode')
    },
    components:{
      Breadcrumbs
    },
    data() {
      return {
        path:[
          {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Episódios',
          disabled: false
        }
        ],
        search: '',
        title: 'Episódios',
        headers: [
          {
            text: 'Episódio',
            value: 'name'
          },
          {
            text: 'Data Lançamento',
            value: 'air_date'
          },
          {
            text: 'Temporada / Episódio',
            value: 'episode'
          }
        ]
      }
    },
}
</script>

<style>

</style>