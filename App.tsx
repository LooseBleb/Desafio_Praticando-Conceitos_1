import { SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { colors } from './src/styles/colors';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}> 
      <StatusBar barStyle={'light-content'} backgroundColor={colors.gray700} translucent/>
      <Home/>
    </SafeAreaView>
  );
}

