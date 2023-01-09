import api from '../api/api'

export default {
    namespaced: true,
    state: () => ({
        stringArray: [],
        newStringEntry: '',
        updatedObject: null,
    }),
    mutations: {
        setNewStringEntry: (state, value) => {
            state.newStringEntry = value;
        },
        setUpdatedString: (state, value) => {
            state.updatedObject.stringValue = value;
        },
        startUpdate: (state, id) => {
            state.updatedObject = {...state.stringArray.find((entry) => entry._id === id)};
        },
        setData: (state, data) => {
            state.stringArray = data;

        }
    },
    actions: {
        async create({ state, dispatch }) {
            await api.create({
                stringValue: state.newStringEntry
            })
            dispatch('read')
        },
        async read({ commit }) {
            const array = await api.read();
            commit('setData', array)
        },
        async update({ state, dispatch }) {
                await api.update(state.updatedObject._id, state.updatedObject)
            dispatch('read')
        },
        async delete({ dispatch }, id) {
            await api.delete(id)
        dispatch('read')
    }

    },
    getters: {
        stringArray: (state) => state.stringArray,
        newStringEntry: (state) => state.newStringEntry,
        updatedObject: (state) => state.updatedObject,

    }
}