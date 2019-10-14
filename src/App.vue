<template>
  <v-app>
    <v-content>
      <HomeComponent/>
    </v-content>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent'

export default {
  name: 'App',
  components: {
    HomeComponent
  },
  data: () => ({
    //
  })
}
</script>
