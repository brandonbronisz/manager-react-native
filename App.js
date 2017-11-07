import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {

    componentWillMount() {

        const config = {
          apiKey: "AIzaSyD3f-RSrPHbg4ikxB0e4bMaBJ9bV7DrSQw",
          authDomain: "manager-b419f.firebaseapp.com",
          databaseURL: "https://manager-b419f.firebaseio.com",
          projectId: "manager-b419f",
          storageBucket: "manager-b419f.appspot.com",
          messagingSenderId: "184399334938"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
