<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="e1 > 1">Name of step 1</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <one :complete="e1" @form1validity="setE"/>
        <!-- <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn> -->
        <!-- <v-btn flat>Cancel</v-btn> -->
      </v-stepper-content>
      <v-stepper-content step="2">
        <two/>
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <three/>
        <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import one from './one.vue'
import two from './two.vue'
import three from './three.vue'

 export default {
    data () {
      return {
        e1: 5
      }
    },
    components:{
      one,
      two,
      three
    },
    methods:{
      setE(val){
          console.log(val);
          this.e1=parseInt(val);
      }
    }
  }
</script>
