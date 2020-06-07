import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, FlatList} from 'react-native';

import { Dimensions } from 'react-native';

let HomePage = (props) => {

    const win = Dimensions.get('window');

    let styles = StyleSheet.create({
        home_mage_container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ccccff',
        },
        items_list: {
            width: win.width,
            height: win.height -64,
        },
        item_container: {
            marginTop: 6,
            marginBottom: 4,
            marginLeft: 2,
            marginRight: 2,
            backgroundColor: '#222222',
            borderRadius: 4,
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity:  0.4,
            shadowRadius: 3,
            elevation: 5,
        },
        photo: {
            height: 300,
            marginTop: 40,
        },
        avtor: {
            marginTop: 8,
            marginLeft: 3,
            marginRight: 3,
            fontWeight: '600',
            fontSize: 17,
            color: '#ddddff',
        },
        alt_description: {
            marginLeft: 3,
            marginRight: 3,
            marginBottom: 14,
            fontSize: 17,
            color: '#ddddff',
            fontWeight: '300',
        },
    });

    let renderItem = ({item, index}) => {

        return (
            <View style={styles.item_container} key={item.links.raw} >
                <TouchableHighlight 
                    onPress={() => {
                        return props.navigation.navigate('Somesing_photo', {photo: item.links.raw, avtor: item.avtor})}
                    }
                >
                        <Image 
                            style={styles.photo} 
                            source={{uri: item.links.small}} />

                        </TouchableHighlight >
                        <Text style={styles.avtor} >
                            {item.avtor}
                        </Text>
                        <Text style={styles.alt_description} >
                            {`"${item.alt_description}"`}
                        </Text>
                    </View>
        );
    };

    let onEndReached = (info: {distanceFromEnd: number}) => {
        props.loadMore(props.current_page);
        console.log('loadMore');
    }

    return (
        <View style={styles.home_mage_container} >
            <FlatList style={styles.items_list}
                data={props.photos} 
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={onEndReached}/>
            </View>
    );
};

export default HomePage;

