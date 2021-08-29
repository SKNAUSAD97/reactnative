import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity,Image, ScrollView } from "react-native";

const MessageScreen = ({route,navigation}) =>{
    return (
      <>
        <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate('chat',{userName:'Shahrukh Khan'})}>
                <View style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image source={require('../assets/Banner/71klIm9v4zL._SS500_.jpg')}  style={styles.UserImg} />
                    </View>
                    <View style={styles.TextSection}> 
                        <View style={styles.UserInfoText}>
                            <Text style={styles.UserName}>
                                Shahrukh Khan
                            </Text>
                            {/* <Text style={styles.PostTime}>
                                2 hours ago
                            </Text> */}
                            <Text style={styles.MessageText}>
                                Lorem Ipsum Copper Sit,Lorem Ipsum Copper Sit,
                                Lorem Ipsum Copper Sit,                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate('chat',{userName:'Amir Khan'})}>
                <View style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image source={require('../assets/Banner/64176077.jpg')}  style={styles.UserImg} />
                    </View>
                    <View style={styles.TextSection}> 
                        <View style={styles.UserInfoText}>
                            <Text style={styles.UserName}>
                                Amir Khan
                            </Text>
                            {/* <Text style={styles.PostTime}>
                                2 hours ago
                            </Text> */}
                            <Text style={styles.MessageText}>
                                Lorem Ipsum Copper Sit,Lorem Ipsum Copper Sit,
                                Lorem Ipsum Copper Sit,                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate('chat',{userName:'Akshya Kumar'})}>
                <View style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image source={require('../assets/Banner/1583210898_186_10-Bollywood-Stars-Acted-in-B-Grade-Movies-in-Their-Bad.jpg')}  style={styles.UserImg} />
                    </View>
                    <View style={styles.TextSection}> 
                        <View style={styles.UserInfoText}>
                            <Text style={styles.UserName}>
                                Akshaya Kumar
                            </Text>
                            {/* <Text style={styles.PostTime}>
                                2 hours ago
                            </Text> */}
                            <Text style={styles.MessageText}>
                                Lorem Ipsum Copper Sit,Lorem Ipsum Copper Sit,
                                Lorem Ipsum Copper Sit,                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate('chat',{userName:'Anil Kapoor'})}>
                <View style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image source={require('../assets/Banner/bannerImage2.jpg')}  style={styles.UserImg} />
                    </View>
                    <View style={styles.TextSection}> 
                        <View style={styles.UserInfoText}>
                            <Text style={styles.UserName}>
                                Anil Kapoor
                            </Text>
                            {/* <Text style={styles.PostTime}>
                                2 hours ago
                            </Text> */}
                            <Text style={styles.MessageText}>
                                Lorem Ipsum Copper Sit,Lorem Ipsum Copper Sit,
                                Lorem Ipsum Copper Sit,                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate('chat',{userName:'Varun Dhawan'})}>
                <View style={styles.UserInfo}>
                    <View style={styles.UserImgWrapper}>
                        <Image source={require('../assets/Banner/bannerImage3.jpg')}  style={styles.UserImg} />
                    </View>
                    <View style={styles.TextSection}> 
                        <View style={styles.UserInfoText}>
                            <Text style={styles.UserName}>
                                Varun Dhawan
                            </Text>
                            {/* <Text style={styles.PostTime}>
                                2 hours ago
                            </Text> */}
                            <Text style={styles.MessageText}>
                                Lorem Ipsum Copper Sit,Lorem Ipsum Copper Sit,
                                Lorem Ipsum Copper Sit,                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor:'white'
      },
      Card : {
        width: '100%',
      },
      UserInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      UserImgWrapper:{
        paddingTop: 15,
        paddingBottom:15
      },
      UserImg:{
        width: 50,
        height: 50,
        borderRadius:25
      },
      UserInfoText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      TextSection:{
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      UserInfoText:{
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
      },
      UserName:{
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'Lato-Regular'
      },
      MessageText: {
        fontSize: 14,
        color: '#333333', 
      },
      PostTime:{
        fontSize: 12,
        color: '#666',
        fontFamily: 'Lato-Regular',
      }
  });
  export default MessageScreen;