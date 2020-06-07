import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './Store/redux-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import HomePageContainer from './components/HomePageContainer/HomePageContainer';
import PhotoPageContainer from './components/PhotoPageContainer/PhotoPageContainer';

let Stack = createStackNavigator();

export default function App() {

    let headerStyles = {
        headerStyle: {
            backgroundColor: '#222', 
            color: '#000000',
            elevation: 0,
            borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold', 
        },
    };

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Gallery">
                    <Stack.Screen name="Gallery"
                        options={{ ...headerStyles, }} >
                        { props => <HomePageContainer {...props} /> }
                    </Stack.Screen>
                    <Stack.Screen name='Somesing_photo' 

                        options={{ ...headerStyles, }} >
                        { props => <PhotoPageContainer {...props} /> }
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}


