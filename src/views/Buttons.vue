<template>
  <div class="home">
    <h1>Transactions page</h1>
    <br>
        <h3>Wallets </h3>

    <!-- <v-btn class="pink white--text">Press me</v-btn>
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
    </v-btn> -->

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
              <input type="text" placeholder="address" v-model="w2_addressToSend"></input>
              <input type="text" placeholder="amount to send" v-model="w2_amountToSend"></input>
              <v-btn class="red-white-text" @click="transfer(wallet1.address, w2_addressToSend, w2_amountToSend)">send</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex pa-2>
        <v-card>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              Address: {{ this.wallet2.address }}
            </v-flex>
            <v-flex class="pa-3" xs12 md6>
              Balance: {{ this.wallet2.balance }}
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex class="pa-3" xs12 md6>
              <input type="text" placeholder="address" v-model="w1_addressToSend"></input>
              <input type="text" placeholder="amount to send" v-model="w1_amountToSend"></input>
              <v-btn class="red-white-text" @click="transfer(wallet2.address, w1_addressToSend, w1_amountToSend)">send</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container>
    <v-layout>
      <v-flex pa-2>
        <v-card>
          <v-layout>
            <v-flex class="pa-3" xs12 md6>
              <h2>
                Пополнение - Кабинет агента
              </h2>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pa-3 xs12 md6">
              <h3>
                Баланс агента: {{ agentWalletBalance}}
              </h3>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pa-3" xs12 md6>
              <input type="text" placeholder="адрес кошелька" v-model="depositWalletAddress">
              <input type="text" placeholder="сумма пополнения" v-model="depositAmount">
              <br><p></p>
              <v-btn @click="transfer(88008800, depositWalletAddress, depositAmount)">
                Пополнить
              </v-btn>
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
      w1_addressToSend: null,
      w1_amountToSend: null,
      w2_addressToSend: null,
      w2_amountToSend: null,
      agentWalletBalance: null,
      depositWalletAddress: null,
      depositAmount: null,
    };
  },
  methods: {
    loadWallets() {
      fetch('http://localhost:2077/init', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          address: 332211,
        }),
      }).then(rawData => rawData.json()).then((wallet) => {
        this.wallet1 = wallet;
        console.log(JSON.stringify(this.wallet1));
      });

      fetch('http://localhost:2077/init', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          address: 112233,
        }),
      }).then(rawData => rawData.json()).then((wallet) => {
        this.wallet2 = wallet;
        console.log(JSON.stringify(this.wallet2));
      });
    },
    transfer(from, to, amount) {
      fetch('http://localhost:2077/tx', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          from,
	        to,
	        amount,
        }),
      }).then(rawData => rawData.json()).then((status) => {
        console.log(JSON.stringify(status));
        this.w1_addressToSend = null;
        this.w1_amountToSend = null;
        this.w2_addressToSend = null;
        this.w2_amountToSend = null;
        this.loadWallets();
        this.loadAgentWallet();
      });
    },

    loadAgentWallet() {
      fetch('http://localhost:2077/init', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          address: 88008800,
        }),
      }).then(rawData => rawData.json()).then((agent) => {
        console.log(JSON.stringify(agent));
        this.agentWalletBalance = agent.balance;
      });
    },

  },
  created() {
    this.loadWallets();
    this.loadAgentWallet();
  },
};
</script>
