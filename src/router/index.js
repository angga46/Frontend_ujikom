import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import home from '../views/HomeView.vue'
import Kontak from '../views/Kontak.vue'
import TentangKami from '../views/TentangKami.vue'
import Prodact from '../views/Prodact.vue'
import produk from '../views/admin/produk.vue'; // Perbaikan: mengimpor produk
import DetailProduk from '../views/DetailProduk.vue';
import LayoutAdmin from '../layout/layout.vue';
import admin from '../views/admin/dashboard.vue';
import tabel from '../views/tabel/tabel_user.vue';
import profile from '../views/admin/profile.vue';
import kontak from '../views/tabel/tabel_kontak.vue';
import addProduk from '../views/admin/addProduk.vue';
import editproduk from '../views/admin/editproduk.vue';

function guardMyroute(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('token'))
        isAuthenticated = true;
    else
        isAuthenticated = false;
    if (isAuthenticated) {
        next(); // allow to enter route
    } else {
        next('/login'); // go to '/login';
    }
}

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/login',
            name: 'login',
            component: login,
        },
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/Kontak',
            name: 'Kontak',
            component: Kontak,
        },
        {
            path: '/tentangkami',
            name: 'TentangKami',
            component: TentangKami,
        },
        {
            path: '/Prodact',
            name: 'Prodact',
            component: Prodact,
        },
        {
            path: '/detailproduk',
            name: 'DetailPrduk',
            component: DetailProduk,
        },
        {
            path: '/admin',
            name: 'LayoutAdmin',
            component: LayoutAdmin,
            beforeEnter: guardMyroute,
            children: [{
                    path: '/admin',
                    name: 'admin',
                    component: admin,
                },
                {
                    path: '/admin/tabelakun',
                    name: 'tabel',
                    component: tabel,
                },
                {
                    path: '/admin/profile',
                    name: 'profile',
                    component: profile,
                },
                {
                    path: '/admin/kontak',
                    name: 'AdminKontak',
                    component: kontak,
                },
                {
                    path: '/admin/produk',
                    name: 'admin produk',
                    component: produk, // Perbaikan: menggunakan produk
                },
                // {
                //     path: '/admin/tabeluser',
                //     name: 'tabeluser',
                //     component: tabeluser, // Perbaikan: menggunakan produk
                // },
                {
                    path: '/admin/addProduk',
                    name: 'addProduk',
                    component: addProduk,
                },
                {
                    path: '/admin/editProduk/:id',
                    name: 'editProduk',
                    component: editproduk,
                },
            ]
        },
    ]
});

export default router