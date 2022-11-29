import { createStore, StoreOptions } from "vuex";
import * as TestModule from "./TestModule/TestModule"; //get all export 

const store = createStore(<StoreOptions<any>>{
   modules: {
    TestModule : <Object>{
        namespaced: true,
        ...TestModule
    }
   }
});

export default store