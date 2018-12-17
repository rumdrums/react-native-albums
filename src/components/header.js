import React from 'react';
import {Platform, Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center", // vertical orientation
    alignItems: "center", // horizontal orientation
    height: 60,
    position: "relative",
    ...Platform.select({
      ios: {
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
      },
      android: {
        elevation: 10 // required to get shadow working properly on android
      }
    }),
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;