import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Home from './pages/Home/HomeScreen'; // ✅ sesuai path & export

const App = () => {
  return(
      <View style={styles.container}>
        <ScrollView>
          <Home />
       </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    padding: 30
  },
});

export default App;