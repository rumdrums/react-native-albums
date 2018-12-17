import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums fuck!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center", // vertical orientation
    alignItems: "center", // horizontal orientation
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2 // required to get shadow working properly on android
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;