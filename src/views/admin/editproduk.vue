<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-md rounded-md p-6 max-w-md">
        <h1 class="text-2xl font-bold mb-4 text-center">Edit Produk</h1>
        <form @submit.prevent="updateProduk">
          <div class="mb-4">
            <label for="nama_produk" class="block text-sm font-medium text-gray-700">Nama Produk</label>
            <input type="text" id="nama_produk" v-model="formData.nama_produk" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
          </div>
          <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi</label>
            <textarea id="description" v-model="formData.description" rows="4" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"></textarea>
          </div>
          <div class="mb-4">
            <label for="gambar" class="block text-sm font-medium text-gray-700">URL Gambar</label>
            <input type="text" id="gambar" v-model="formData.gambar" class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200">
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit Produk</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import Swal from 'sweetalert2';

  export default {
    data() {
      return {
        formData: {
          nama_produk: '',
          description: '',
          gambar: '',
          
        }
      };
    },
    computed: {
      ...mapGetters('produk', ['getProdukById']),
      produk(){
        return this.getProdukById
      }
    },
    methods: {
    ...mapActions('produk', ['fetchProdukById', 'updateProduk', 'deleteProduk']), // Perbaiki pemanggilan aksi dengan nama yang benar
    
    async updateProduk() {
      const produk = {
        id: this.$route.params.id, // Perbaiki pengambilan ID
        nama_produk: this.formData.nama_produk, // Ambil nilai dari formData
        description: this.formData.description,
        gambar: this.formData.gambar,
      };
      try {
        const success = await this.$store.dispatch('produk/updateProduk', produk); // Perbaiki pemanggilan aksi dengan nama yang benar
        if (success) {
          this.$router.push('/admin/produk')
          alert("Berhasil memperbarui produk");
        }
      } catch(error) {
        alert("Gagal memperbarui produk");
      }
    },
    
    async fetchData() {
    await this.fetchProdukById(this.$route.params.id);
    const produk = this.produk.data;
    console.log(produk); // Tambahkan ini untuk memeriksa nilai produk di konsol browser
    if (produk) {
      this.formData = {
        nama_produk: produk.nama_produk,
        description: produk.description,
        gambar: produk.gambar
       
      };
    }
  }
  
  },
  
    mounted() {
      this.fetchData(); // Fetch produk data when component is mounted
    }
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>