import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRestaurant = createAsyncThunk('restaurant/fetchRestaurant', () => {

    const result = axios.get('restaurant.json').then(response => response.data)
    console.log(result);
    return result
})

const restSilce = createSlice({

    name: 'restaurant',
    initialState: {
        loading: false,
        restaurantArray: [],
        searchArray: [],
        error: ''
    },
    extraReducers: (builder) => {
        //builder hold value
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false
            state.restaurantArray = action.payload
            state.searchArray = action.payload
            state.error = ''
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false
            state.restaurantArray = ''
            state.searchArray = ''
            state.error = action.error.message
        })
    },
    reducers: {

        search: (state, action) => {

            console.log('state=', state.searchArray.restaurants);
             state.restaurantArray.restaurants = state.searchArray.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload.toLowerCase()))

            console.log(state.searchArray.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload.toLowerCase())));
            console.log('state=', state.restaurantArray.restaurants);



            // let finalArray = [];

            // for (var j = 0; j < state.searchArray.restaurants.length; j++) {


            //     console.log("j LOOP=", state.searchArray.restaurants[j].neighborhood.toLowerCase());
            //     console.log('ACTION=', action.payload.toLowerCase());
            //     console.log('total=', state.searchArray.restaurants[j].neighborhood.toLowerCase() === action.payload.toLowerCase());

            //     if (state.searchArray.restaurants[j].neighborhood.toLowerCase() === action.payload.toLowerCase()) {
            //         finalArray.push(state.searchArray.restaurants[j]);
            //     }
            // }

            // console.log('finalArray:', finalArray);
            // state.restaurantArray.restaurants = finalArray

        }

    }

})

export default restSilce.reducer
export const { search } = restSilce.actions

