import { configureStore } from "@reduxjs/toolkit";
import restSilce from "./restSilce";

const restStore = configureStore({
    reducer:{
        restSilce:restSilce

    }

})


export default restStore