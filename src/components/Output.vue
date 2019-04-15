<template>
  <div class="hello">
    Output
    <hr>
          <v-flex xs12 sm6 d-flex>
            <v-select
                    v-model="current"
                    :items="operations"
                    label="Selecteaza Operatia"
                    outline
                    @change="getResult()"
            ></v-select>
          </v-flex>
          <h2> Rezultat : {{ resultNumber  }} | X este : {{  $store.getters.getX }} , Y este : {{  $store.getters.getY }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
      return {
          operations: ['+','-','*','/'],
          current : '+',
          resultNumber : '',
          x: 0,
          y: 0
      }
  },
  methods : {
    getResult: function () {
        switch (this.current) {
            case '+': this.resultNumber = this.x + this.y
                break
            case '-': this.resultNumber = this.x - this.y
                break
            case '*': this.resultNumber = this.x * this.y
                break
            case '/': this.resultNumber = this.x / this.y
                break
        }
      }
  },
  mounted(){
      console.log($store.getters.getX);
      this.x = parseInt($store.getters.getX);
      this.y = parseInt($store.getters.getX);

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td, th{
  border:solid 1px;
}
</style>
