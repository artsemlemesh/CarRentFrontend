import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from '../features/bookings/bookingSlice'



export const store = configureStore({
    reducer: {
        bookings: bookingReducer,
    }
})

export default store