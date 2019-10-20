<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row class="main-content">
          <div class="card-a">
            <Card
              cardTitle="Post data"
              firstText="First post title"
              secondText="Second post body"
            >

              <ExtraData>
                <h1>{{ this.count }}</h1>

                <ExtraData>
                  <v-btn @click="incrementCount">Click to increment the count number</v-btn>
                </ExtraData>
              </ExtraData>

            </Card>
          </div>

          <div class="card-b">
            <Card
              cardTitle="User data"
              firstText="First User title"
              secondText="Second User body"
            >

              <ExtraData>
                <h1>{{ count }}</h1>

                <ExtraData><p>bla</p></ExtraData>
              </ExtraData>

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
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Card,
    ExtraData
  },

/*
  computed: {
    count () {
      return this.$store.state.count
    }
  },
*/

  computed: mapState([
    'count'
  ]),

/*
  methods: {
    incrementCount: function () {
      this.$store.dispatch('incrementCount')
    }
  }
*/

  methods: {
    ...mapActions([
      'incrementCount'
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
