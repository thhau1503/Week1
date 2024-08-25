import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={{width: 400, height: 200}} />
        <Text style={styles.text}>TRƯỜNG ĐẠI HỌC SƯ PHẠM KỸ THUẬT</Text>
        <Text style={styles.text}>KHOA CÔNG NGHỆ THÔNG TIN</Text>
        <Text style={styles.text}>HOMEPAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});