export const SET_PHOTO = 'SET-PHOTO';
export const SET_AVTOR = 'SET-AVTOR';

let initial_state = {
    photo: '',
    avtor: '',
};

let photoReducer = (state = initial_state, action) => {
    switch(action.type) {
        case SET_PHOTO:
            return setPhoto(state, action.photo);
        case SET_AVTOR:
            return setAvtor(state, action.avtor);
        default: 
            return state;
    };
};

export const setPhoto = (state, photo) => {
    let state_copy = {...state};
    state_copy.photo = photo;

    return state_copy;
};

export const setAvtor = (state, avtor) => {
    let state_copy = {...state};
    state_copy.avtor = avtor;

    return state_copy;
};

export const setPhotoActionCreator = photo => ({type: SET_PHOTO, photo});

export const setAvtorActionCreator = avtor => ({type: SET_AVTOR, avtor});

export default photoReducer;
