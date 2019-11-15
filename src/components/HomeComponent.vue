<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row class="main-content">
          <div class="card-a">
            <Card
              cardTitle="Post data"
              :firstText="upperTitle"
              :secondText="truncatedBody"
            >

            <ExtraData>
              {{ body }}
            </ExtraData>

            </Card>
          </div>

          <div class="card-b">
            <Card
              cardTitle="User data"
              firstText="First User title"
              secondText="Second User body"
            >

            </Card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from './Card'
import ExtraData from './ExtraData'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    ExtraData
  },

  computed: {
    ...mapState('postModule', [
      'body'
    ]),

    ...mapGetters('postModule', [
      'truncatedBody', 'upperTitle'
    ])
  },

  created () {
    this.getData()
  },

  methods: {
    ...mapActions('postModule', [
      'getData'
    ])
  }
}
</script>

<style scoped>
  .container, .row {
    height: 100%;
  }

  .main-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
