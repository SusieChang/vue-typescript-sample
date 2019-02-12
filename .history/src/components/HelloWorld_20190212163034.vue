<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <simple-head :level='level'>
      TEST
    </simple-head>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import SimpleHead from '@/components/SimpleHead.vue'
export default Vue.extend({
  components: {
    'simple-head': require('@/components/SimpleHead.vue').default
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      level: 1,
      name: 'HelloWorld'
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
