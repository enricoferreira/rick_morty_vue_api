<template>
<div>
  <v-app-bar color="deep-purple" dark>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title>Rick Morty - Api</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>

      <v-list-item-group active-class="deep-purple--text text--accent-4">

        <router-link :to="{name: 'home'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{name: 'personagens'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Personagens</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{name: 'episodios'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-television</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Episódios</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link :to="{name: 'locais'}">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-map-marker-radius</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Locais</v-list-item-title>
          </v-list-item>
        </router-link>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
    name: 'ToolBar',
    data () {
      return {
        drawer: false
      }
    },
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>