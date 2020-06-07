const ROOT_URL = 'https://api.unsplash.com/photos';
const client_id = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';

export const api = {
    photos: {
        fetch (page = 1) {

            return fetch(`${ROOT_URL}/?client_id=${client_id}&page=${page}`, {
                method:  'GET',
            });
        },

    },
};

