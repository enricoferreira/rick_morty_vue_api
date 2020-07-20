<template>
<v-card class="px-0 mb-2" :elevation="5">
    <v-col cols="12" class="py-0">
  <v-breadcrumbs class="px-0 py-5" :elevation="3" :items="path" divider="-"></v-breadcrumbs>
    </v-col>
</v-card>
</template>

<script>
export default {
    name:  'Breadcrumb',
    props: ['path']
}
</script>

<style>

</style>