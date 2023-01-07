import {createStore} from 'vuex'
import antonCrud from './antonCrud'

const store = createStore({
  modules: {
    antonCrud 
  }
})

export default store;