import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// const logo = {
//   uri : "https://reactnative.dev/img/tiny_logo.png",
//   width: 30,
//   height: 40,
// };
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Palindrome Words</Text>
//       <StatusBar style="auto" />
//       <ScrollView>
//         <Text style={{ fontSize: 90 }}>Scroll Please! </Text>
//         <Image source={logo}></Image>
        
//       </ScrollView>
//     </View>
//   );
// }


const App = () => {
  return (
    <NavigationContainer>
      <ScrollView>
      
      <View style={mainStyles.container}>

        <View style={mainStyles.emptyHead}>
        </View>
        <View style={mainStyles.header}>
          <Text style={mainStyles.headerText}> Palindrome Examples</Text>
        </View>
        <View style={mainStyles.info}>
          <Text style={mainStyles.infoText}> * Choose B/W
              <Text style={{ fontWeight:'bold', }}> Numbers</Text> AND
              <Text style={{ fontWeight:'bold', }}> Words.</Text> 
          </Text>
        </View>
        <View style={mainStyles.buttonsView}>
          <Button
            color="#60646E"
            title="Numbers"
            />{/** onPress={ShowPalindromeNumbers} */}
          <Button 
            // style={mainStyles.button}
            title="Words"
            color="#60646E"
            />{/** onPress={ShowPalindromeWords} */}
        </View>
        <ScrollView style={{marginHorizontal:5,}}>
          <View style={mainStyles.body}>
            <View style={styles.flatList}>
                <FlatList
                  data={[
                    {key: 'Kayak'},
                    {key: 'civic'},
                    {key: 'rotor'},
                    {key: 'redivider'},
                    {key: 'modom'},
                    {key: 'level'},
                    {key: 'radar'},
                    {key: 'madam'},
                    {key: 'refer'},
                    {key: 'malta'},
                    {key: 'rulur'},
                    {key: 'brokorb'},
                    {key: 'appa'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
                <FlatList
                  data={[
                    {key: '12312'},
                    {key: '198891'},
                    {key: '11111'},
                    {key: '0900440090'},
                    {key: '09044090'},
                    {key: '0904090'},
                    {key: '0110'},
                    {key: '909909'},
                    {key: '1234321'},
                    {key: '7823287'},
                    {key: '6767676'},
                    {key: '1212121'},
                    {key: '12345678987654321'},
                  ]}
                  renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
          </View>
        </ScrollView> 
        <View style={mainStyles.footer}>
          <Text style={mainStyles.footerText}> @ to Trademark.com</Text>
        </View>
      </View>
      </ScrollView>
    </NavigationContainer>
  )
};
const mainStyles = StyleSheet.create({
  container: {
    height: '100%',
    fontFamily: "Gill Sans, sans-serif",
  },
  emptyHead: {
    height:'4%',
  },
  header: {
    // flex: 1,
    backgroundColor: '#D6D8D3',
    height: '10%',
    /**  NOTE: Not compatible for Android 
     *  borderTopRightRadius:'5px',
        borderTopLeftRadius:'5px', */
  },
  headerText: {
    fontWeight: "bold",
    fontSize:20,
    textAlign:'center',
    paddingTop:'4%',
  },
  buttonsView: {
    // flex: 2,
    marginTop:'1%',
    height:'5.5%',
    /** Below Styles for  Button to show in Flex */
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  info : {
    // flex: 3,
    backgroundColor: '#ECEEEB',
    alignContent:'center',
  },
  body: {
    justifyContent: 'flex-end',
    paddingLeft:'10%',
  },  
  infoText: {
    textAlign:'center',
  },  
  // button: {
    // backgroundColor:'#41444B',
    // height:'40%',
    // width:60,
  // },
  footer: {
    // flex: 4,
    height:'20%',
    backgroundColor: '#060640',
    alignItems:'center',
  },
  footerText: {
    color:'white',
  }
})
export default App;

const FlatListBasics = () => {
  return (
    <View style={styles.flatList}>
      <FlatList
        data={[
          {key: 'Kayak'},
          {key: 'civic'},
          {key: 'rotor'},
          {key: 'redivider'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
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
  flatList: {
    // flex: 1,
    flexDirection:'row',
    paddingTop: 22,
  },
  item: {
    padding:10,
    fontSize:18,
    height:44,
  },
});

// export default FlatListBasics;