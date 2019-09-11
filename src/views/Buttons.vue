<template>
  <div class="home">
    <h1>Buttons page</h1>
    <v-btn class="pink white--text">Press me</v-btn>
    <v-btn color="pink" dark depressed>Click me</v-btn>
    <v-btn flat >click me</v-btn>
    <v-btn depressed small class="pink white--text">
      <v-icon left>phone</v-icon>
      <span>Call me</span>
    </v-btn>
    <v-btn depressed round :loading="false" :disabled="loading3" class="pink white--text">
      <span>email me</span>
      <v-icon right>email</v-icon>
    </v-btn>
    <v-btn depressed small dark fab color="purple">
      <v-icon >star</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {

};
</script>
