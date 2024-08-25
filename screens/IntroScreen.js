import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 10000); 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ và tên: Phan Thanh Hậu </Text>
        <Text style={styles.text}>MSSV: 21110824</Text>
        <Text style={styles.text}>Lớp: 21110CLST2B</Text>
        <Text style={styles.text}>Lớp học phần: Lập trình di động nâng cao</Text>
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