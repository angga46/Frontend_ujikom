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

<div class="overflow-x-hidden">
<div class="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<!-- Inner Container with Content -->
<div class="mx-auto max-w-3xl text-center">
<!-- Heading -->
<h1 class="mt-5 text-3xl font-light leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
Selamat <br class="sm:hidden" />
Datang Di
<span class="relative inline-flex justify-center whitespace-nowrap font-bold">
  <!-- SVG Icon -->
  <svg class="absolute -bottom-8 hidden w-2/3 text-gray-400 sm:block" viewBox="0 0 490 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG Paths -->
  </svg>
  KOPI
</span>
</h1>
<!-- Subtitle -->
<p class="mx-auto mt-12 max-w-md leading-7 text-gray-600">Kopi terbaik unggulan Indonesia</p>
</div>
</div>
</div>


<div class="mt-16 mb-16 flex flex-col items-center justify-center divide-y divide-gray-300 sm:flex-row sm:divide-x sm:divide-y-0 md:mt-20">
<div class="flex max-w-xs space-x-2 px-4 py-4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
</svg>
<p class="text-gray-600">Disukai banyak orang</p>
</div>
<div class="flex max-w-xs space-x-2 px-4 py-4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
<p class="text-gray-600">Membuat citra rasa kopi Indonesia semakin dikenal oleh dunia</p>
</div>
<div class="flex max-w-xs space-x-2 px-4 py-4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p class="text-gray-600">Harga yang sangat terjangkau</p>
</div>
</div>
</div>

<!-- blog pertama -->

<section class="bg-white py-6 sm:py-8 lg:py-12">
<div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
<!-- Heading -->
<div class="mb-10 md:mb-16">
<h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Postingan tentang kami</h2>

</div>
<!-- /Heading -->
<div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
<!-- Article -->
<article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
<a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
  <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
</a>

<div class="flex flex-col gap-2">
  <span class="text-sm text-gray-400">April 2, 2024</span>

  <h2 class="text-xl font-bold text-gray-800">
    <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Perkebunan</a>
  </h2>

  <p class="text-gray-500">Berkebun di pegunungan sehinngga kopi tidak terkena polusi udara, karena sangat jauh dari kehidupan manusia.</p>

  <div>
  </div>
</div>
</article>
<!-- /Article -->
<!-- Article -->
<article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
<a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
  <img src="https://ds393qgzrxwzn.cloudfront.net/resize/c700x700/cat1/img/images/0/i0hqHH0zH5.jpg" />
</a>

<div class="flex flex-col gap-2">
  <span class="text-sm text-gray-400">April 2, 2024</span>

  <h2 class="text-xl font-bold text-gray-800">
    <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Teknologi</a>
  </h2>

  <p class="text-gray-500">Diolah dengan teknologi terbaik industri sehingga rasa dan aromanya semakin terasa.</p>

  <div>
  </div>
</div>
</article>
<!-- /Article -->
<!-- Article -->
<article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
<a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_I3BxXb3qJh3XOmgYSshwquWYKksQUVieGQ&s" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
</a>

<div class="flex flex-col gap-2">
  <span class="text-sm text-gray-400">April 2, 2024</span>

  <h2 class="text-xl font-bold text-gray-800">
    <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Pabrik </a>
  </h2>

  <p class="text-gray-500">Pabrik terletak di Jl. San brigo No.189ab, RW.09, Turangga, Kec. Royen, Kota Bandung, Jawa Barat 40265.</p>

  <div>
  </div>
</div>
</article>
<!-- /Article -->
<!-- Article -->
<article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
<a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
  <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
</a>

<div class="flex flex-col gap-2">
  <span class="text-sm text-gray-400">April 2, 2024</span>

  <h2 class="text-xl font-bold text-gray-800">
    <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">Lingkungan kerja</a>
  </h2>

  <p class="text-gray-500">Lingkungan kerja yang sangat luas dan bersih membuat pekerja dan pelanggan semakin yakin bahwa kopi kita adalah yang terbaik.</p>

  <div>
  </div>
</div>
</article>
<!-- /Article -->
</div>
</div>

<!-- our blog -->
<section class="w-screen py-20">
<h1 class="mb-12 text-center font-sans text-5xl font-bold">Lainnya...</h1>
<div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">

<article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
<img class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxO27ybqc8lHj9inUwhd_2DD4FjTKtCW0dQ&s" alt="blog" />
<h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
<div class="py-1 px-6">
<h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Headquarters(Indonesia)</h1>
<p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Menara Sentraya, Lantai 15, Jl. Iskandarsyah Raya No.1A, RT.3/RW.1, Kel. Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta – 12160.</p>
</div>
<div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
<div class="flex flex-wrap text-sm text-gray-500">
<!-- <span class="mr-1">Oct 30, 2024</span>
<span class="">· 9 min read</span> -->
</div>
<div class="mt-1">
<span class="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg> -->
  <!-- 3.5K -->
</span>
</div>
</div>
</article>

<article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
<img class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5AqoEO6SKkbTAByaLPNWIYzdhMt7ymUh9w&s" alt="blog" />
<h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
<div class="py-1 px-6">
<h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Singapore Office</h1>
<p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">10 Kallang Avenue, Aperia Tower 2, #05-13, Singapore 339510.</p>
</div>
<div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
<div class="flex flex-wrap text-sm text-gray-500">
<!-- <span class="mr-1">Oct 30, 2022</span>
<span class="">· 9 min read</span> -->
</div>
<div class="mt-1">
<span class="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg> -->
  <!-- 3.5K -->
</span>
</div>
</div>
</article>

<article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
<img class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src="data:image/jpeg;base64,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" alt="blog" />
<h2 class="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
<div class="py-1 px-6">
<h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">Malaysia Office</h1>
<p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">27A & 27B, Jalan SS21/1A, Damansara Utama, 47400 Petaling Jaya, Selangor.</p>
</div>
<div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
<div class="flex flex-wrap text-sm text-gray-500">
<!-- <span class="mr-1">Oct 30, 2022</span>
<span class="">· 9 min read</span> -->
</div>
<div class="mt-1">
<span class="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg> -->
  <!-- 3.5K -->
</span>
</div>
</div>
</article>

</div>
</section>
</section>

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