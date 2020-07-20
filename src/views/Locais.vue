<template>
<div>
  <breadcrumb :path="path"></breadcrumb>
  <v-card>
    <v-card-title>
      {{title}}
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
      </v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="api" :search="search">
    </v-data-table>
  </v-card>
</div>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import fetchData from '../mixins/fetchData'
export default {    
    name: 'Locais',
    components:{
      Breadcrumb
    },
    
    mixins: [fetchData],
    created() {
        this.fetchAllDataType('/location')
    },
    data() {
      return {
        path: [{
        text: 'Home',
        href: '/'
      },
      {
        text: 'Locais',
        disabled: false
      }
    ],
        search: '',
        title: 'Locais',
        headers: [
          {
            text: 'Local',
            value: 'name'
          },
          {
            text: 'Tipo',
            value: 'type'
          },
          {
            text: 'Dimensão',
            value: 'dimension'
          }
        ]
      }
    },
}
</script>

<style>

</style>