<template>
  <div class="home">
    <h1>Transactions page</h1>
    <br>
    <h2>Wallet: </h2>
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

  <v-container>
    <v-layout row>
      <v-flex pa-2>
        <v-card>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              Address: {{ this.wallet1.address }}
            </v-flex>
            <v-flex class="pa-3" xs12 md6>
              Balance: {{ this.wallet1.balance }}
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              <input type="text" placeholder="address"></input>
              <input type="text" placeholder="amount to send"></input>
              <v-btn class="red-white-text">send</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex pa-2>
        <v-card>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              Address: {{ this.wallet1.address }}
            </v-flex>
            <v-flex class="pa-3" xs12 md6>
              Balance: {{ this.wallet1.balance }}
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              <input type="text" placeholder="address"></input>
              <input type="text" placeholder="amount to send"></input>
              <v-btn class="red-white-text">send</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
    

  </div>
</template>

<script>

export default {
  data() {
    return {
      wallet1: {},
      wallet2: {},
    }
  },
  methods: {
    loadWallets() {
      fetch('http://localhost:2077/init', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
            address: 332211
          })
      }).then(rawData => rawData.json()).then((wallet) => {
        this.wallet1 = wallet;
      console.log(JSON.stringify(this.wallet1))
      })
    },
    transfer() {
      fetch('http://localhost:2077/tx', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          "from": "332211",
	        "to": "112233",
	        "amount": 5000
        })
      })
    }
  },
  created() {
    this.loadWallets();
  }
};
</script>
