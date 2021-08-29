import * as React from 'react';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MySettingComponent from "./AppBaar/MySettingComponent";
import MyHomeComponent from "./AppBaar/MyHomeComponent"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./Screen/HomeScreen";
import SubCategory from './Screen/SubCategory';
import Product from './Screen/Product';
import MessageScreen from "./Screen/MessageScreen";
import ChatScreen from './Screen/ChatScreen';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const MessageStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const OptionToShow = () =>({
  headerShown:false
});

function HomeStackScreen({navigation}) {
  return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} options={
          OptionToShow
        } />
        <HomeStack.Screen name="SubCategory" component={SubCategory} 
        options={({route})=>({
          title:route.params.title
        }),OptionToShow}
        />
        <HomeStack.Screen name="Product" component={Product} 
        options={({route})=>({
        headerTitle:false,
        headerTransparent:true,
        headerTintColor:'#fff'
        })}
        />
      </HomeStack.Navigator>
  );
}



function SettingStackScreen() {
  return (
      <SettingStack.Navigator initialRouteName="Home">
        <SettingStack.Screen name="Setting" component={SettingsScreen} options={
          OptionToShow
        } />
      </SettingStack.Navigator>
  );
}

function MessageStackScreen ({navigation}){
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name="Message" component={MessageScreen} options={{
        headerLeft: () =>(
        <TouchableOpacity onPress={() => navigation.goBack()} >
          {/* <ArrowBackIcon
          style={{marginLeft:'12px'}}
        /> */}
        <Icon name="chevron-left" size={25} color="black" style={{marginLeft:12}} />
        </TouchableOpacity>
        )
      }} />
      <MessageStack.Screen name="chat" component={ChatScreen}
        options={
          ({route}) =>({
            title:route.params.userName,
          })
        }
      />
    </MessageStack.Navigator>
  );
}




function SettingsScreen({navigation}) {
  return (
    <MySettingComponent navigation={navigation} />
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const TabComponent = () =>{
  // const getTabBarRoute = (route) =>{
  //   const routeName = route.state ? route.state.routes[route.state.index].name : '';
  //   if(routeName === "chat")
  //   {
  //     return false;
  //   }
  //   return true;
  // }
  return <Tab.Navigator
  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
         return <Icon name="home" size={30} color="#6200EE" />
        //  <HomeIcon style={{color:'#6200EE'}} />
            
        } else if (route.name === 'Settings') {
          return <Icon name="cog" size={30} color="#6200EE" />
          // <SettingsIcon  style={{color:'#6200EE'}} />
        }
        else if (route.name === 'Message')
        {
          return <Icon name="envelope-open" size={30} color="#6200EE" />
          // <ChatBubbleIcon  style={{color:'#6200EE'}} />
        }

        // You can return any component that you like here!
      },
    })}
    tabBarOptions={{
      activeTintColor: 'rgb(78, 18, 168)',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={
      OptionToShow
    } />
    <Tab.Screen name="Settings" component={SettingStackScreen} options={
      OptionToShow
    } />
    <Tab.Screen name="Message" component={MessageStackScreen} 
      options={({route}) => ({
        tabBarVisible : false
      })}
    />
  </Tab.Navigator>
}

const App = ()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabComponent} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconstyle:{
    color:'#6200EE'
  }
});
export default App;