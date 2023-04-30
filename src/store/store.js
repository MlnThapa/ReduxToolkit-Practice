import {configureStore} from '@reduxjs/toolkit';

import userReducer from '../userSlice/app'

export const store = configureStore({
    reducer:{
        userReducer
    },
})