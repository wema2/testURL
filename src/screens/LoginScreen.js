import React from 'react';
// import * as SecureStore from 'expo-secure-store';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
// import { NavigationActions, StackActions } from 'react-navigation';

class LoginScreen extends React.Component {
  // テキストフィールドで入力したワードをキャッチする箱を作る
  state = {
    email: '2@2.2',
    password: '222222',
  }

  // navigateToHome() {
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [
  //       NavigationActions.navigate({ routeName: 'Home' }),
  //     ],
  //   });
  //   this.props.navigation.dispatch(resetAction);
  // }

  // eslint-disable-next-line
  handleSubmit() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // SecureStore.setItemAsync('email', this.state.email);
        // SecureStore.setItemAsync('password', this.state.password);
        // this.navigateToHome();
        // eslint-disable-next-line
        console.log('success!', user);
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log('error!', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.bottun} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  bottun: {
    backgroundColor: '#E31676',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
