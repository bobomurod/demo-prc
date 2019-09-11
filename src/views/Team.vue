<template>
  <div class="team">
    <h1 class="subheading grey--text">This is Demo page</h1>

    <v-container class="my-5" >
      <v-layout row>
        <v-flex pa-2>
          <v-card flat >
            <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Клиент ФИО
            </div>
            <div>
              {{ object1.client.firstName + " " + object1.client.lastName }}
            </div>

            <div class="grey--text">
              Номер телефона
            </div>
            <div>
              {{ "+"+object1.client.phone }}
            </div>
          </v-flex>

          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Баланс
            </div>
            <div>
              {{ object1.balance }}
            </div>
            <div class="grey--text">
              Дата рождения
            </div>
            <div>
              {{ object1.client.birthDate }}
            </div>
          </v-flex>

          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Статус
            </div>
            <div>
              {{ object1.type.title }}
            </div>
            <div class="grey--text">
              Person Code
            </div>
            <div>
              {{ object1.client.personCode }}
            </div>
            
          </v-flex>

        </v-layout>

        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Серия и номер паспорта
            </div>
            <div>
              {{ object1.client.document.series + " " + object1.client.document.number }}
            </div>
            <div class="grey--text">
              Issue date
            </div>
            <div>
              {{ object1.client.document.issueDate }}
            </div>
            <div class="grey--text">
              Expires
            </div>
            <div>
              {{ object1.client.document.expireDate }}
            </div>
            <div class="grey--text">
              Выдан
            </div>
            <div>
              {{ object1.client.document.issuer }}
            </div>
            <div class="grey--text">
              Место рождения
            </div>
            <div>
              {{ object1.client.birthPlace }}
            </div>
          </v-flex>
          
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Страна
            </div>
            <div>
              {{ object1.client.document.country }}
            </div>
             <div class="grey--text">
              Национальность
            </div>
            <div>
              {{ object1.client.nationality }}
            </div>
            <div class="grey--text">
              MRZ
            </div>
            <div>
              {{ object1.client.document.mrz }}
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Пол
            </div>
            <div>
              {{ object1.client.gender }}
            </div>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              IBAN
            </div>
            <div>
              {{ object1.iban }}
            </div>
            <div class="grey--text">
              PAN
            </div>
            <div>
              {{ object1.pan }}
            </div>
            <div class="grey--text">
              BANK
            </div>
            <div>
              {{ object1.bank.title }}
            </div>
            <div class="grey--text">
              Bank BIN number
            </div>
            <div>
              {{ object1.bank.bin }}
            </div>
            
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Единица
            </div>
            <div>
              {{ object1.currency.title }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Код единицы
            </div>
            <div>
              {{ object1.currency.code }}
            </div>
            
          </v-flex>
          
        </v-layout>

        <v-layout row wrap>
          <v-flex>
            <v-img :src="object1.client.photos.nfcFace" ></v-img>
          </v-flex>
          <v-flex>
            <v-img :src="object1.client.photos.selfieDocument" ></v-img>
          </v-flex>
        </v-layout>

          </v-card>
        </v-flex>



        <v-flex pa-2>
          <v-card flat >
            <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Клиент ФИО
            </div>
            <div>
              {{ object2.client.firstName + " " + object2.client.lastName }}
            </div>

            <div class="grey--text">
              Номер телефона
            </div>
            <div>
              {{ "+"+object2.client.phone }}
            </div>
          </v-flex>

          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Баланс
            </div>
            <div>
              {{ object2.balance }}
            </div>
            <div class="grey--text">
              Дата рождения
            </div>
            <div>
              {{ object2.client.birthDate }}
            </div>
          </v-flex>

          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Статус
            </div>
            <div>
              {{ object2.type.title }}
            </div>
            <div class="grey--text">
              Person Code
            </div>
            <div>
              {{ object2.client.personCode }}
            </div>
            
          </v-flex>

        </v-layout>

        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              Серия и номер паспорта
            </div>
            <div>
              {{ object2.client.document.series + " " + object2.client.document.number }}
            </div>
            <div class="grey--text">
              Issue date
            </div>
            <div>
              {{ object2.client.document.issueDate }}
            </div>
            <div class="grey--text">
              Expires
            </div>
            <div>
              {{ object2.client.document.expireDate }}
            </div>
            <div class="grey--text">
              Выдан
            </div>
            <div>
              {{ object2.client.document.issuer }}
            </div>
            <div class="grey--text">
              Место рождения
            </div>
            <div>
              {{ object2.client.birthPlace }}
            </div>
          </v-flex>
          
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Страна
            </div>
            <div>
              {{ object2.client.document.country }}
            </div>
             <div class="grey--text">
              Национальность
            </div>
            <div>
              {{ object2.client.nationality }}
            </div>
            <div class="grey--text">
              MRZ
            </div>
            <div>
              {{ object2.client.document.mrz }}
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="pa-3">
            <div class="grey--text">
              Пол
            </div>
            <div>
              {{ object2.client.gender }}
            </div>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex class="pa-3" xs12 md6>
            <div class="grey--text">
              IBAN
            </div>
            <div>
              {{ object2.iban }}
            </div>
            <div class="grey--text">
              PAN
            </div>
            <div>
              {{ object2.pan }}
            </div>
            <div class="grey--text">
              BANK
            </div>
            <div>
              {{ object2.bank.title }}
            </div>
            <div class="grey--text">
              Bank BIN number
            </div>
            <div>
              {{ object2.bank.bin }}
            </div>
            
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Единица
            </div>
            <div>
              {{ object2.currency.title }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="pa-3">
            <div class="grey--text">
              Код единицы
            </div>
            <div>
              {{ object2.currency.code }}
            </div>
            
          </v-flex>
          
        </v-layout>

        <v-layout row wrap>
          <v-flex>
            <v-img :src="object2.client.photos.nfcFace" ></v-img>
          </v-flex>
          <v-flex>
            <v-img :src="object2.client.photos.selfieDocument" ></v-img>
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
      // person1: {
      //   code: null,
      //   balance: null,
      //   createTime: null,
      //   _wallet_id: null,
      //   registerTime: null,
      //   _client_id: null,
      //   firstName: null,
      //   lastName: null,
      //   middleName: null,
      //   phone: null,
      //   gender: null,
      //   personCode: null,
      //   nationality: null,
      //   birthDate: null,
      //   birthPlace: null,
      //   photos: {
      //     nfcFace: null,
      //     selfieDocument: null,
      //   },
      //   document: {
      //     docType: null,
      //     series: null,
      //     number: null,
      //     expireDate: null,
      //     issuer: null,
      //     country: null,
      //     issueDate: null,
      //     mrz: null,
      //   },
      //   bank: {
      //     _bank_id: null,
      //     name: null,
      //     title: null,
      //     bin: null,
      //   },
      //   type: {
      //     _type_id: null,
      //     name: null,
      //     title: null,
      //   },
      //   pan: null,
      //     state: null,
      //     iban: null,
      // },
      object1: {

      },
      object2: {

      },
    };
  },


  methods: {
    getClients() {
      fetch('http://192.168.0.100:5000/client', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }).then(rawData => rawData.json()).then((clients) => {
        // this.object1.firstName = clients.data[0].client.firstName

        this.object1 = clients.data[0];

        console.log(JSON.stringify(clients));
        console.log(this.object1.client.firstName);

        this.object2 = clients.data[1];
        console.log(this.object2.client.firstName);
      });
    },
  },

  created() {
    this.getClients();
  },

};
</script>
