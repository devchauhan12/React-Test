const initialState = {
    data: [
        { id: 3, name: 'Om Prakash Jat', email: 'om@gmail.com', address: 'Delhi', status: 'Not Active' },
        { id: 1, name: 'Dev Joshi', email: 'dev@gmail.com', address: 'Surat', status: 'Active' },
        { id: 2, name: 'Neel Patel', email: 'neel@gmail.com', address: 'Mumbai', status: 'Away' },
        { id: 6, name: 'Vikas Patel', email: 'vikas@gmail.com', address: 'Kerela', status: 'Away' },
        { id: 5, name: 'Abhi Patel', email: 'abhi@gmail.com', address: 'Ahemdabad', status: 'Active' },
        { id: 4, name: 'jeet Patel', email: 'jeet@gmail.com', address: 'Rajkot', status: 'Away' },
    ],
    categories: ['All', 'Active', 'Away', 'Not Active'],
    filteredData: [],
    sortOrder: 'asc',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_DATA':
            let filter = state.data.filter((item) => {
                return action.payload === 'All' ? true : item.status === action.payload
            })
            return { ...state, filteredData: filter };

        case 'SEARCH_DATA':
            let search = state.data.filter(item =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            )
            // console.log(search)
            return { ...state, filteredData: search };

        case 'SORT_DATA':
            let sort1 = state.filteredData.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            console.log(sort1)
            return { ...state, filteredData: sort1, sortOrder: action.payload };
        case 'SET_DATA':
            return { ...state, filteredData: action.payload };

        default:
            return state;
    }
};

export default reducer;
