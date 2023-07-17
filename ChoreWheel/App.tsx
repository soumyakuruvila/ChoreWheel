/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="ChoreWheel">
          </Section>
        
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
            />
            </View>
            <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry
              placeholder="Password"
            />
          </View>
          <TouchableOpacity
            onPress = {onPressLogin}>
          <Text style={styles.loginText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {onPressLogin}
            style={styles.loginBtn}>
          <Text style={styles.loginTextMain}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress = {onPressLogin}>
          <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const onPressLogin = () => {
// Do something about login operation
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sectionTitle: {
    marginTop: 80,
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 40,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputView:{
    width:"70%",
    alignSelf: "center",
    borderRadius:25,
    borderWidth: 1,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
  },
  inputText:{
    height:50,
  },
  loginText:{
    color:"black",
    fontSize:11,
    alignSelf: "center",
  },
  loginTextMain:{
    color:"black",
    fontSize:16,
    alignSelf: "center",
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"#50967f",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10,
    alignSelf: "center",
  },
});

export default App;
