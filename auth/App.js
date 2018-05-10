import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common/index';
import LoginForm from './src/components/common/LoginForm';

export default class App extends React.Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDwYKrysPZ4KHdb2qNJpohG52dIji87Qgs',
      authDomain: 'authentication-254fa.firebaseapp.com',
      databaseURL: 'https://authentication-254fa.firebaseio.com',
      projectId: 'authentication-254fa',
      storageBucket: 'authentication-254fa.appspot.com',
      messagingSenderId: '692340276538'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Logout
          </Button>
        );
      case false:
        return <LoginForm />;
      default: 
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
