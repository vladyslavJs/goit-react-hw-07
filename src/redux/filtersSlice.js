import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// export actions generator
export const { changeFilter } = filtersSlice.actions;

// export reducer
export default filtersSlice.reducer;

// export selector
export const selectNameFilter = state => state.filters.name;