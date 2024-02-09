export const filterData = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'FILTER_DATA',
            payload: data,
        });
    }
};
export const setData = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    }
};

export const searchData = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SEARCH_DATA',
            payload: data,
        });
    };
}

export const sortData = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'SORT_DATA',
            payload: data,
        });
    }
};
