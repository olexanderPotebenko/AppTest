import React from 'react';
import {connect} from 'react-redux';
import HomePage from './HomePage/HomePage';
import {addPhotosActionCreator, changeCurrentPageActionCreator, loadMorePhotosThunkCreator} from '../../reducers/homeReducer'; 

class HomePageApiContainer extends React.Component {

    componentDidMount() {
        this.props.loadMore(this.props.current_page);
    };

    render() {

        return (
            <HomePage 
                navigation={this.props.navigation} 
                photos={this.props.photos}
                loadMore={this.props.loadMore}
                current_page={this.props.current_page}
            />
        );
    }

};

let mapsStateToProps = (state) => {

    return {
        photos: state.homePage.photos,
        current_page: state.homePage.options.current_page,
    };
};

let mapsDispatchToProps = (dispatch) => {

    return {
        addPhotos(photos) {
            return dispatch(addPhotosActionCreator(photos))
        },
        changeCurrentPage() {
            return dispatch(changeCurrentPageActionCreator());
        },
        loadMore(current_page) {
            return dispatch(loadMorePhotosThunkCreator(current_page));
        },
    };
};

const HomePageContainer = connect(mapsStateToProps, mapsDispatchToProps)(HomePageApiContainer);


export default HomePageContainer;
