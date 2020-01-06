import React from 'react';
import * as Font from 'expo-font';

import { createIconSet } from '@expo/vector-icons';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf'; // カスタムフォントの設定

const CustomIcon = createIconSet({ // 公式のglyphMaoを分かりやすくおきかえた
  pencil: '\uf303', // 鉛筆
  plus: '\uf067', // プラス
  check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color, onPress } = this.props; // this.propsの{ }記述内のオブジェクトを参照している

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  circleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
