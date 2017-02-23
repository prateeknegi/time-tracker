<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>

<template>
  <div id="wrapper" >
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to ="/time-entries">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
          <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import bus from './bus'

export default {
    name: 'app',
    components: { 'sidebar': Sidebar },
    data () {
      return {
        // Start with the same value as our
        // first time entry. Hard-coded for now
        // because we'll use a different approach
        totalTime: 1.5
      }
    },
    created: function(){
      console.log("App created.....")
      bus.$on('timeUpdate', this.timeUpdate)
      bus.$on('deleteTime', this.timeDelete)
    },
    beforeDestroy: function() {
      console.log("App beforeDestroy.....")
      bus.$off('timeUpdate', this.timeUpdate)
      bus.$off('deleteTime', this.timeDelete)
    },
    methods: {
      timeUpdate(timeEntry) {
         this.totalTime += parseFloat(timeEntry.totalTime)
      },
      timeDelete(timeEntry) {
         this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
}

</script>
