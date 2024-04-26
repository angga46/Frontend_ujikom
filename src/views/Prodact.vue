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

  <aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  
    <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
      <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(0, 4)" :key="item.id">
          <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              {{ item.nama_produk }}</span >
       
            <p class=" text-base font-light">{{ item.description }}</p>
            
            <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"><a href="/detailproduk">Selengkapnya</a></span>
          </div>
      </article>
    </div>
  </aside>
  <aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
  
  <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
    <article class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg" v-for="item in produk?.slice(4, 8)" :key="item.id">
        <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
        <div class="flex-auto px-6 py-5">
          <span class="mb-2 flex items-center text-sm font-semibold">
            {{ item.nama_produk }}</span
          >
          <p class=" text-base font-light">{{ item.description }}</p>
          <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"><a href="/detailproduk">Selengkapnya</a></span>
        </div>
    </article>
  </div>
  </aside>
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
  import { mapActions, mapGetters } from 'vuex';
  
  export default{
    computed: {
      ...mapGetters('datauser', ['getDataUser']),
      ...mapGetters('produk', ['getAllProduks']),
      ...mapGetters('kontak', ['getDataKontak']),
      users(){
        return this.getDataUser;
      },
      produk(){
        return this.getAllProduks.data;
      },
      pesan(){
        return this.getDataKontak;
      }
    },
    methods:{
      ...mapActions('datauser', ['fetchDataUser']),
      ...mapActions('produk', ['fetchProduks']),
      ...mapActions('kontak', ['fetchDataKontak'])
    },
    mounted(){
      this.fetchDataUser();
      this.fetchProduks();
      this.fetchDataKontak();
    }
  }
  </script>