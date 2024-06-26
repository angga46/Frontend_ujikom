import axios from "axios";

const kontak = {
    namespaced: true,
    state: {
        dataKontak: [],
    },
    getters: {
        getDataKontak: (state) => state.dataKontak,
    },
    actions: {
        async fetchDataKontak({ commit }) {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token not found');
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const { data } = await axios.get("http://localhost:8080/api/v1/kontak", config);
                commit("SET_KONTAK_DATA", data.data);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async deleteKontak({ commit }, kontakId) {
            try {
                await axios.delete(`http://localhost:8080/api/v1/kontak/delete/${kontakId}`);
                commit("DELETE_KONTAK", kontakId);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    },
    mutations: {
        SET_KONTAK_DATA(state, dataKontak) {
            state.dataKontak = dataKontak;
        },
        DELETE_KONTAK(state, kontakId) {
            state.dataKontak = state.dataKontak.filter(kontak => kontak.id !== kontakId);
        },
    },
};

export default kontak;