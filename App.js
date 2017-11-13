import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
