<template>
  <!-- navbar -->
    <header class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="#" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
  <span class="mr-2 text-cyan-500">
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRV-Ov9wNTWTVjjRwOU_AM_8w16xs8ttsR3OcUs56Nn9rh9TESz" class="w-20 h-15" alt="...">
  </span>

</a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
    <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
      <li class="md:mr-12"><a href="/">Beranda</a></li>
      <li class="md:mr-12"><a href="/prodact">Produk</a></li>
      <li class="md:mr-12"><a href="/kontak">Kontak</a></li>
      <li class="md:mr-12"><a href="/tentangkami">Tentang Kami</a></li>
      <div class="flex justify-center mt-4">
      <button class="bg-blue-500 text-white py-2 px-4 rounded"><a href="/login">Login</a></button>
</div>
    </ul>
  </nav>
</header>

<div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-semibold mb-4">KONTAK</h2>
    <div class="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
      <div class="">
        <p class="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
        <p class="mb-4">Friday: 08:00 - 15:00</p>
        <p class="mb-4">Weekend: Closed</p>
        <p class="mb-4">
          Email:
          <a href="#" class="font-semibold underline">kopi@apps.io</a>
        </p>
        <p class="mb-4">
          Phone:
          <a href="#" class="font-semibold underline">+46 (0) 10-32 32 322</a>
        </p>
      </div>
    </div>

    <h2 class="text-3xl font-semibold mt-8 mb-4">Don't be shy to ask me question</h2>
    <form @submit.prevent="addNewKontak" class="max-w-md">
      <!-- <div class="mb-4">
        <label for="name" class="block text-gray-700 font-semibold">Nama</label>
        <input type="text" v-model="newKontak.name" id="name" placeholder="Masukkan Nama" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
      </div> -->
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input type="email" v-model="newKontak.email" id="email" placeholder="Masukkan Email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
      </div>
      <div class="mb-4">
        <label for="question" class="block text-gray-700 font-semibold">Pertanyaan</label>
        <textarea v-model="newKontak.description" id="question" rows="3" placeholder="Masukkan Pertanyaan" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Tambah Kontak</button>
    </form>
  </div>

<footer class="bg-gray-50">
       <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
         <!-- Add your existing grid content here -->
       </div>
       <div class="bg-gray-100">
         <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
           <div class="">© 2024 kaf Kopi | All Rights Reserved</div>
           <div class="">
             <a class="" href="#">Privacy Policy</a>
             <span> | </span>
             <a class="" href="#">Terms of Service</a>
           </div>
         </div>
       </div>
       <!-- <h2 class="mb-3 text-center font-sans text-1xl font-bold"> WhatsApp Only +62 834 5678 976</h2> -->
     </footer>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kontakList: [],
      newKontak: {
        // name: '',
        email: '',
        question: ''
      }
    };
  },
  created() {
    this.fetchKontakList();
  },
  methods: {
    async fetchKontakList() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/kontak');
        this.kontakList = response.data;
      } catch (error) {
        console.error('Error fetching kontak list:', error);
      }
    },
    async addNewKontak() {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/kontak/add', this.newKontak);
        this.kontakList.push(response.data);
        this.newKontak = {
          name: '',
          email: '',
          question: ''
        };
      } catch (error) {
        console.error('Error adding new kontak:', error);
      }
    },
    async deleteKontak(kontakId) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/kontak/delete/${kontakId}`);
        this.kontakList = this.kontakList.filter(kontak => kontak.id !== kontakId);
      } catch (error) {
        console.error('Error deleting kontak:', error);
      }
    }
  }
};
</script>