import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center', // 中心に寄せる
    alignItems: 'center', // 中心に寄せる
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleButton;
