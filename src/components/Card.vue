<template>
  <v-card
    width="500"
    height="600"
  >

    <v-card-title>{{ cardTitle }}</v-card-title>

    <v-card-text>{{ firstText }}</v-card-text>
    <v-card-text>{{ secondText }}</v-card-text>

    <slot></slot>

  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: [
    'cardTitle',
    'firstText',
    'secondText'
  ],
  data: () => ({
    //
  })
}
</script>
