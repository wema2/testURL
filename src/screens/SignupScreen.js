import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.bottun} onPress={() => {}} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>送信する</Text>
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

export default SignupScreen;
