export default {
    namespaced: true,
    state: () => ({
        stringArray: [],
        newStringEntry: '',
        updatedString: '',
        updatedId: -1,
    }),
    mutations: {
        setNewStringEntry: (state, value) => {
            state.newStringEntry = value;
        },
        setUpdatedString: (state, value) => {
            state.updatedString = value;
        },
        create: (state) => {
            state.stringArray.push(state.newStringEntry);
            state.newStringEntry = '';
        },
        startUpdate: (state, index) => {
            state.updatedId = parseInt(index);
            state.updatedString = state.stringArray[state.updatedId];
        },
        update: (state) => {
            state.stringArray = [...state.stringArray];
            state.stringArray[state.updatedId] = state.updatedString;
            state.updatedId = -1;
            state.updatedString = '';
        },
        delete: (state, index) => {
            state.stringArray.splice(index, 1);
        }
    },
    actions: {
        async save() {
            await console.log('here will be function that return promise')
        }
    },
    getters: {
        stringArray: (state) => state.stringArray,
        newStringEntry: (state) => state.newStringEntry,
        updatedString: (state) => state.updatedString,
    }
}