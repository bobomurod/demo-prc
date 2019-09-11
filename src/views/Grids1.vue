<template>
  <div class="grid1">
    <h1 class="subheading grey--text">This is Team page</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex class="primary" xs12 lg3 pa-2 ma-2>first content</v-flex>
        <v-flex class="success" xs6 lg3>other content</v-flex>
        <v-flex class="error">third content</v-flex>
        <v-flex class="info">fourth content</v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex>
          <v-btn outline block class="success">this is button</v-btn>
        </v-flex>
        <v-flex>
          <v-btn outline block class="info">this is button</v-btn>
        </v-flex>
        <v-flex>
          <v-btn outline block class="error">this is button</v-btn>
        </v-flex>
        <v-flex>
          <v-btn outline block class="primary">this is button</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container my-5>
      <v-layout row wrap justify-space-between>
        <v-flex xs6 md2 class="primary" pa-2 ma-2>first content</v-flex>
        <v-flex xs6 md2 class="error" pa-2 ma-2>second content</v-flex>
        <v-flex xs6 md2 class="success" pa-2 ma-2>third content</v-flex>
        <v-flex xs6 md2 class="info" pa-2 ma-2>
          <v-layout column>
            <v-flex>hello</v-flex>
            <v-flex>hello</v-flex>
            <v-flex>hello</v-flex>
            <v-flex>hello</v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

