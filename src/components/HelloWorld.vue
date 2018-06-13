<template>
<v-app>
  <v-card color="" flat>
    <v-card-text>
      <v-container>

        <v-layout>
          <v-flex xs4 offset-xs4>
            <h2>LOGIN FORM</h2>
            <v-text-field class="black--text" id="usern"
              name="input-1"
              label="USERNAME"
              v-model="username"
              
            ></v-text-field>
            <v-text-field class="black--text" id="pass"
              name="input-2"
              label="PASSWORD"
              v-model="password"
              
            ></v-text-field>

          <v-btn color="primary" id="login" v-on:click="update">LOGIN</v-btn>

         
          </v-flex>
        </v-layout>

      </v-container>
    </v-card-text>
  </v-card>
</v-app> 
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       username: '',
       password:'',
       done:false
    }
  },
  methods:{
    update:function(){
      this.done=true
    }
  }
}
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
