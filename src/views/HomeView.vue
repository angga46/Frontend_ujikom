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

<main>
   <article>
     <header class="mx-auto max-w-screen-xl pt-28 text-center">
       <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Welcome to Website KAF KOPI</h1>
       <img class="sm:h-[34rem] mt-10 w-full object-contain" src="https://insight.toffin.id/wp-content/uploads/2023/12/2.-Angka-Rekomendasi-Mesin-Kopi-Harga-Affordable-untuk-yang-Baru-Memulai-Bisnis-Coffee-Shop-4-1-1024x576.jpg" alt="Featured Image" />
       <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl"></h1>
       <p class="mt-6 text-lg text-gray-700">KOPI adalah minuman dari bubuk kopi yang diseduh dan memiliki macam macam jenis sajian kopi dari metode penyeduhannya seperti espresso, kopi hitam, kopi susu, dan es kopi. Kopi merupakan sejenis minuman yang berasal dari proses pengolahan biji tanaman kopi. Secara umum kopi hanya memiliki dua spesies yaitu Coffea arabica dan Coffea robusta </p>
     </header>
   </article>
 </main>
 
 <div class="w-fit mx-auto mt-10 flex space-x-2">
   <div class="h-0.5 w-2 bg-gray-600"></div>
   <div class="h-0.5 w-32 bg-gray-600"></div>
   <div class="h-0.5 w-2 bg-gray-600"></div>
 </div>
 
 <br> 
 
 <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-1">
     
     <h1 class="mb-8 text-center font-sans text-5xl font-bold">VISI</h1>
     <h3 class="mb-9 text-center font-sans text-3xl ">Menjadi destinasi utama untuk pencinta kopi di kota kami, menyediakan pengalaman unik yang menggabungkan kelezatan kopi berkualitas tinggi dengan pelayanan yang nyaman dan ramah</h3>
 
 
     <h1 class="mb-8 text-right font-sans text-5xl font-bold">MISI</h1>
     <h3 class="mb-9 text-right font-sans text-3xl ">Memperkenalkan kualitas kopi terbaik di indonesia ke pencinta kopi di dunia, menciptakan pengalaman kopi yang kaya, dan membina hubungan dengan pelanggan
       
      
 <h3 class="mb-9 text-center font-sans text-3xl "></h3>
 <h3 class="mb-9 text-center font-sans text-3xl "> </h3></h3>
   </div>
 
 
   <h1 class="mb-8 text-center font-sans text-5xl font-bold">Produk</h1>
 <!-- Daftar produk -->
    <section aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
      <!-- Tampilkan produk dalam grid -->
      <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-2 md:grid-cols-4">
        <!-- Tampilkan artikel untuk setiap produk -->
        <article v-for="item in produk" :key="item.id" class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
          <img :src="item.gambar" class="h-56 w-56 object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">{{ item.nama_produk }}</span >
            <p class="text-base font-light">{{ item.description }}</p>
            <button class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"><a href="/detailproduk">Selengkapnya</a></button>
          </div>
        </article>
      </div>
    </section>

   <!-- <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
     
     <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
       <a href="#">
         <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-66995669/kopi_sore_kopi_bubuk_robusta_lampung_1_kg_full01_ruww88gj.jpeg" class="h-56 w-full object-cover" alt="" />
         <div class="flex-auto px-6 py-5">
           <span class="mb-2 flex items-center text-sm font-semibold">
             <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" /></svg>
             Awards</span
           >
           <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">Robusta 1Kg</h3>
           <span class="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm"><a href="/detailproduk">selengkapnya</a></span>
         </div>
       </a>
     </article>
     
     <article class="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
   </div> -->
  

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

export default {
  computed: {
    ...mapGetters('produk', ['getAllProduks']),
    produk() {
      return this.getAllProduks.data;
    }
  },
  methods: {
    ...mapActions('produk', ['fetchProduks', 'hapusProduk']),
    hapusProduk(id) {
      // Panggil aksi untuk menghapus produk dengan ID tertentu
      this.hapusProduk(id)
        .then(() => {
          // Jika berhasil menghapus, muat ulang daftar produk
          this.fetchProduks();
        })
        .catch(error => {
          console.error('Gagal menghapus produk:', error);
        });
    }
  },
  mounted() {
    // Panggil aksi untuk memuat daftar produk saat komponen dimuat
    this.fetchProduks();
  }
};
</script>



