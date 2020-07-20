<template>
  <v-col cols="4">
    <v-card v-if="condition" :elevation="4" color="white">
      <v-card-title class="justify-center text-center text--disabled font-weight-light">
        {{title_card}}
      </v-card-title>
      <v-divider></v-divider>
      <div class="transition-swing text-h1 mb--1 text-center">
        {{object.length}}
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'CardChart',
  props: ['condition', 'object', 'title_card'],
  data() {
    return {
      hasLabel: false
    }
  },
}
</script>

<style>

</style>