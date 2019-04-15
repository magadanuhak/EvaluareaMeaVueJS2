<template>
  <div id="app">
  <div>
    <router-view></router-view>
  </div>
  <v-card height="200px">
    <v-bottom-nav
            :active.sync="bottomNav"
            :color="color"
            :value="true"
            absolute
            dark
            shift
    >
      <v-btn to="/"  dark>
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn to="Input" dark>
        <span>Input</span>
        <v-icon>input</v-icon>
      </v-btn>

      <v-btn to="Output" dark>
        <span>Output</span>
        <v-icon>print</v-icon>
      </v-btn>

      <v-btn to="Students" dark>
        <span>Studenti</span>
        <v-icon>list</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
      return {
          bottomNav: 3
      }
  },
  computed: {
      color () {
          switch (this.bottomNav) {
              case 0: return 'blue-grey'
              case 1: return 'teal'
              case 2: return 'brown'
              case 3: return 'indigo'
          }
      }
  },
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
