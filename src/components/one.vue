<template>
  <div>
    <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
    <p>ONE ONE ONE</p>
    <v-btn @click="submit" type="submit" color="primary">BONTINUE</v-btn>

  </div>
</template>

<script>
export default {
  name:'one',
  methods:{
    submit:function(){
      this.$emit('form1validity',2);
    }
  }
}
</script>

