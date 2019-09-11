<template>
  <div class="team">
    <h1 class="subheading grey--text">This is Team page</h1>

    <v-container class="my-5" >
      <v-layout row>
        <v-flex pa-2>
          <v-card flat >
            <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>


        <v-flex pa-2>
           <v-card flat >
            <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>

      </v-layout>
      
      <!-- <v-card flat >
        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Project title
            </div>
            <div>
              Create new website
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Person
            </div>
            <div>
              The Net Ninja
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Due by
            </div>
            <div>
              1st Jun 2019
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Status
            </div>
            <div>
              Ongoing
            </div>
          </v-flex>
        </v-layout>
      </v-card> -->
      
      
    </v-container>

  </div>
</template>

<script>
export default {

  data() {
    return {
      person1: {
        name: 'data_name'
      }
    };
  },


  methods: {
    getClients() {
      fetch('http://192.168.0.100:5001/client', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(rawData => rawData.json()).then(clients => {
        console.log(JSON.stringify(clients))
      })
    }
  },

  created() {
       this.getClients() 
    //    {
    //   fetch('http://192.168.0.100:5001/client', {
    //     method: 'GET',
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   }).then(rawData => rawData.json()).then(clients => {
    //     console.log(JSON.stringify(clients))
    //   })
    // }
  },

}
</script>

