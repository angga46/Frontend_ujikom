<template>
  <div class="flex justify-center items-center h-screen">
  <div class="m-10 max-w-sm text-center">
    <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
      <div class="relative mx-auto w-36 rounded-full">
        <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2 "></span>
        <img class="mx-auto h-auto w-full rounded-full" src="https://i.pinimg.com/564x/f4/64/c9/f464c9a7bd5650830bc548054759a79a.jpg" alt="" />
      </div>
      <h1 class="my-1 text-xl font-bold leading-8 text-gray-900">Sarah Carter</h1>
      <h3 class="font-lg text-semibold leading-6 text-gray-600">Sr.Engineer</h3>
      <p>_______________________________________________</p>

      <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow" style="text-align: center;">
        <li class="flex items-center py-3 text-sm">
          <span>Status</span>
          <span class="ml-auto"><span class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Admin Aktif</span></span>
        </li>
        <li class="flex items-center py-3 text-sm">
          <span>Date of birth</span>  
          <span class="ml-auto">July 14, 2006</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('datauser', ['getCurrentUser']), // Mengambil getter getUserData dari datauser module
    user () {
      return this.getCurrentUser;
    },
  },
  created() {
    // Panggil metode untuk mengambil data pengguna saat komponen dibuat
    this.fetchCurrentUser();
  },
  methods: {
    ...mapActions('datauser', ['fetchCurrentUser']), // Mengambil action fetchUserData dari datauser module
    async getUserData() {
      // Ambil data pengguna dari state menggunakan getter
      const userData = this.getUserData;
      // Jika data pengguna tersedia
      if (userData) {
        // Setel nama pengguna dan email pengguna dari data yang diambil
        this.userName = userData.name;
        this.userEmail = userData.email;
      }
    },
  },
  }
</script>