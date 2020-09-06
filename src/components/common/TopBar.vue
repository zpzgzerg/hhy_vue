<template>
  <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
  >
    <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)"></v-app-bar-nav-icon>
    <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">호호유 관리자모드</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
  },
}
</script>

<style scoped>

</style>
