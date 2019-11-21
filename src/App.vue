<template>
  <v-app>
    <v-content>
      <HomeComponent/>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HomeComponent,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
