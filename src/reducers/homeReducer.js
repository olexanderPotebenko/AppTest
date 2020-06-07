import {api} from '../api/api';

export const ADD_PHOTOS = 'ADD-PHOTOS'; 
export const ADD_AVTOR = 'ADD-AVTOR';
export const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';

let initial_state = {
    options: {
        page_count: 10,
        current_page: 1,
    },
    photos: [
        // {
        //     avtor: "United Nations COVID-19 Response",
        //     id: "C2Ae0F7Pfb0",
        //     links: {
        //         raw: "https://images.unsplash.com/photo-1588779180563-d7599d127ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //         small: "https://images.unsplash.com/photo-1588779180563-d7599d127ffe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //     }
        // },
        // {
        //     avtor: "Mike Von",
        //     id: "5AnZISf-ZJ8",
        //     links: {
        //         raw: "https://images.unsplash.com/photo-1591253604755-a03c59ca2883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //         small: "https://images.unsplash.com/photo-1591253604755-a03c59ca2883?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //     }
        // },
        // {
        //     avtor: "Miguel Dominguez",
        //     id: "eoSQzXAzY0M",
        //     links: {
        //         raw: "https://images.unsplash.com/photo-1591310895919-98759f32d722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //         small: "https://images.unsplash.com/photo-1591310895919-98759f32d722?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjMzMTkxfQ",
        //     }
        // },
    ],
};

let homeReducer = (state = initial_state, action) => {
    switch(action.type) {
        case ADD_PHOTOS: 
            return addPhotos(state, action.photos);
        case CHANGE_CURRENT_PAGE:
            return changeCurrentPage(state);
        default: 
            return state;
    };
};

let addPhotos = (state, photos) => {
    let state_copy = {...state};
    state_copy.photos = [...state.photos, ...photos];
    return state_copy;
};

let changeCurrentPage = (state) => {
    let state_copy = {...state};
    state_copy.options = {...state.options};
    ++state_copy.options.current_page;
    return state_copy;
};

export let addPhotosActionCreator = (photos) => {
    return {type: ADD_PHOTOS, photos};
};

export let changeCurrentPageActionCreator = () => {
    return {type: CHANGE_CURRENT_PAGE};
};

export let loadMorePhotosThunkCreator = (current_page) => {

    return (dispatch) => {

        api.photos.fetch(current_page).then(res => {
            return res.json();
        }).then(arr => {
            console.log(arr);
            let photos = arr.map(item => {

                return {
                    id: item.id,
                    avtor: item.user.name,
                    alt_description: item.alt_description,
                    links: {
                        small: item.urls.small,
                        raw: item.urls.raw,
                    },
                }; 
            });
            console.log(photos);

            dispatch(addPhotosActionCreator(photos));
            dispatch(changeCurrentPageActionCreator());
        });
    };
};


export default homeReducer;
