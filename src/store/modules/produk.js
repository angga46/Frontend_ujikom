import axios from 'axios';

const produk = {
    namespaced: true,
    state: {
        produks: [],
        currentProduk: null,
    },
    getters: {
        getAllProduks: (state) => state.produks,
        getProdukById: (state) => state.currentProduk,
        getCurrentProduk: (state) => state.currentProduk,
    },
    actions: {
        async fetchProduks({ commit }) {
            try {
                const response = await axios.get("http://localhost:8080/api/v1/produk");
                commit("SET_PRODUKS", response.data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async fetchProdukById({ commit }, produkId) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/produk/${produkId}`);
                commit("SET_CURRENT_PRODUK", response.data);
            } catch (error) {
                console.error(error.response.message);
                throw error;
            }
        },
        async createProduk({ commit }, produkData) {
            try {
                const response = await axios.post("http://localhost:8080/api/v1/produk/add", produkData);
                commit("ADD_PRODUK", response.data);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async updateProduk({ commit }, produkData) {
            try {
                const response = await axios.put(`http://localhost:8080/api/v1/produk/${produkData.id}`, produkData);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async deleteProduct({ commit }, productId) {
            try {
                const response = await axios.delete(`http://localhost:8080/api/v1/produk/delete/${productId}`);
                commit("DELETE_PRODUCT", productId);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }

        },
        // actions lainnya ...
    },
    mutations: {
        SET_PRODUKS(state, produks) {
            state.produks = produks;
        },
        SET_CURRENT_PRODUK(state, produk) {
            state.currentProduk = produk;
        },
        ADD_PRODUK(state, newProduk) {
            state.produks.push(newProduk);
        },
        DELETE_PRODUK(state, produkId) {
            state.produks = state.produks.filter(produk => produk.id !== produkId);
        },
    },
};

export default produk;