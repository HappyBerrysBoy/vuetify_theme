import Vue from 'vue';

const state = {
    username: null,
    account: null,
};

const mutations = {
    saveUsername(_state, payload) {
        Vue.set(_state, 'username', payload);
    },
    saveAccount(_state, payload) {
        Vue.set(_state, 'account', payload);
    },
    logout(_state) {
        Vue.set(_state, 'username', null);
    },
};

const actions = {
    logout: () => {
        window.location = '/';
    },
};

export default {
    state,
    mutations,
    actions,
};