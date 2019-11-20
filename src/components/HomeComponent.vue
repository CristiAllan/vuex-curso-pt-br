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

            <ExtraData>
              <v-form>
                <v-text-field :value="title" @input="updateTitle" />

                <v-text-field v-model="body" />
              </v-form>
            </ExtraData>

            </Card>
          </div>

          <div class="card-b">
            <Card
              cardTitle="User data"
              :firstText="userName"
              :secondText="userEmail"
            >
              <ExtraData>
                <v-btn @click="getUser">Get User data</v-btn>
              </ExtraData>

              <ExtraData>
                <p>{{ street }}</p>
                <p>{{ suite }}</p>
                <p>{{ city }}</p>
              </ExtraData>

              <ExtraData>
                <h3 v-if="userPostsCounter">Posted <span>{{ userPostsCounter }}</span></h3>
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
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    ExtraData
  },

  computed: {
    ...mapState('postModule', [
      'title'
    ]),

    ...mapGetters('postModule', [
      'truncatedBody', 'upperTitle'
    ]),

    ...mapState('userModule', {
      userEmail: 'email',
      userPostsCounter: 'postsCount'
    }),

    ...mapGetters('userModule', {
      userName: 'upperName'
    }),

    ...mapState('userModule/address', [
      'street', 'suite', 'city'
    ]),

    body: {
      get () {
        return this.$store.state.postModule.body
      },

      set (value) {
        this.$store.commit('postModule/setBody', value)
      }
    }
  },

  created () {
    this.getData()
  },

  methods: {
    ...mapActions('postModule', [
      'getData'
    ]),

    ...mapActions('userModule', {
      getUser: 'getData'
    }),

    updateTitle: function (e) {
      this.$store.commit('postModule/setTitle', e)
    }
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

  span {
    color: green;
  }
</style>
