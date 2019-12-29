import React from 'react';
import * as Font from 'expo-font';

import { createIconSet } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf'; // カスタムフォントの設定

const CustomIcon = createIconSet({ // 公式のglyphMaoを分かりやすくおきかえた
  pencil: '\uf303', // 鉛筆
  plus: '\uf067', // プラス
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
    const { name, style, color } = this.props; // this.propsの{ }記述内のオブジェクトを参照している

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        }
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
    borderRadius: 24,
    justifyContent: 'center', // 中心に寄せる
    alignItems: 'center', // 中心に寄せる
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
