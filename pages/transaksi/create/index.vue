<template>
  <b-container fluid="md" class="mt-5 mb-5">
    <Navigation />
    <b-row>
      <b-col md="12">
        <b-card class="shadow-md border-0 rounded-lg">
          <h5>TAMBAH TRANSAKSI</h5>
          <hr />
          <div>
            <b-form-datepicker
              id="example-datepicker"
              v-model="penjualan.tanggal"
              class="mb-2"
            ></b-form-datepicker>
          </div>

          <b-table
            striped
            bordered
            hover
            :items="posts1"
            :fields="fields"
            show-empty
          >
          </b-table>
          <b-form-group label="Total">
            <b-form-input
              type="text"
              v-model="penjualan.total"
              :class="{ 'is-invalid': validation.total }"
              placeholder="Total"
            >
            </b-form-input>
            <div v-if="validation.total" class="mt-2">
              <b-alert show variant="danger">{{ validation.total[0] }}</b-alert>
            </div>
          </b-form-group>
          <b-form-group label="Total Bayar">
            <b-form-input
              type="text"
              v-model="penjualan.total"
              :class="{ 'is-invalid': validation.total }"
              placeholder="Total Bayar"
            >
            </b-form-input>
            <div v-if="validation.total" class="mt-2">
              <b-alert show variant="danger">{{ validation.total[0] }}</b-alert>
            </div>
          </b-form-group>
          <b-button type="submit" variant="primary">SIMPAN</b-button>
          <a href="/transaksi/" class="btn btn-primary">Back</a>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      //header table
      penjualan: {
        tanggal: "",
        total: "",
      },
      //state validation
      validation: [],

      fields: ["nama_produk", "harga", "qty", "sub-total"],
      fields1: ["total"],
      fields2: ["tanggal"],
      //posts data
      posts: [],
      posts1: [],
      post4: [],
    };
  },

  //<template v-slot:cell(actions)="row">
  // <b-button
  // :to="{ name: 'product-edit-id', params: { id: row.item.id } }"
  //variant="warning"
  //size="sm"
  //>EDIT
  // </b-button>
  //<b-button variant="danger" size="sm" @click="deletePost(row)"
  //>DELETE</b-button
  //>
  // </template>

  mounted() {
    //fething ke Rest API
    this.$axios
      .get("/api/product")

      .then((response) => {
        //assign response ke state "posts"
        this.posts1 = response.data.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    this.$axios
      .get("/api/penjualan")

      .then((response) => {
        //assign response ke state "posts"
        this.posts = response.data.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    this.$axios
      .get("/api/transaksidetail")

      .then((response) => {
        //assign response ke state "posts"
        this.posts4 = response.data.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },

  methods: {
    async deletePost(row) {
      //delete data post by ID
      await this.$axios.delete(`/api/product/${row.item.id}`).then(() => {
        //remove item array by index
        this.posts.splice(row.index, 1);
      });
    },
  },
};
</script>

<style>
</style>