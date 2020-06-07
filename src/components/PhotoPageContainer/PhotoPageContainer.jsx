import React from 'react';
import {connect} from 'react-redux';
import { Dimensions, View, StyleSheet, Image } from 'react-native';
import {setAvtorActionCreator, setPhotoActionCreator} from '../../reducers/photoReducer';

class PhotoPageApiContainer extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.setPhoto(this.props.route.params.photo);
        this.props.setAvtor(this.props.route.params.avtor);
        debugger;
        this.props.navigation.setOptions({title: this.props.route.params.avtor});
    }

    render() {

        return (
            <View style={this.styles.container}>
                <Image 
                    style={this.styles.photo} 
                    source={{uri: this.props.photo}} />
                </View>
        );
    }

    win = Dimensions.get('window');

    styles = StyleSheet.create({
        container: {
            backgroundColor: '#222',
        },
        photo: {
            width: this.win.width,
            height: this.win.height - 64,
            resizeMode: 'contain',
        },
    });
};

const mapsStateToProps = (state) => {
    return {avtor: state.photoPage.avtor, photo: state.photoPage.photo};
};

const mapsDispatchToProps = (dispatch) => {
    return {
        setAvtor(avtor){
            return dispatch(setAvtorActionCreator(avtor));
        },
        setPhoto(photo){
            return dispatch(setPhotoActionCreator(photo));
        },
    };
};

const PhotoPageContainer = connect(mapsStateToProps, mapsDispatchToProps)(PhotoPageApiContainer);

export default PhotoPageContainer;
