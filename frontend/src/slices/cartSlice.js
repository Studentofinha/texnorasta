import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState=localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[]

const cartSlice = cartSlice({
    name:'cart',
    initialState,
    reducers:
})