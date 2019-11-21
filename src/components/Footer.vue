<template>
  <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-row>
        <v-col
          class="text-center"
          cols="6"
        >
          <h3>Post data</h3>
          <p>{{ title }}</p>
          <p>{{ body }}</p>
        </v-col>
        <v-col
          class="text-center"
          cols="6"
        >
          <h3>User data</h3>
          <p>{{ userName }}</p>
          <p>{{ userEmail }}</p>
          <p>Address: {{ street }}, {{ suite }}, {{ city }}</p>
        </v-col>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('postModule', {
      title: 'title',
      body: 'body'
    }),

    ...mapState('userModule', {
      userEmail: 'email'
    }),

    ...mapGetters('userModule', {
      userName: 'upperName'
    }),

    ...mapState('userModule/address', [
      'street', 'suite', 'city'
    ])
  }
}
</script>
