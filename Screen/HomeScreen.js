import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import MyHomeComponent from "../AppBaar/MyHomeComponent";
import Swiper from 'react-native-swiper/src';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DevicesIcon from '@material-ui/icons/Devices';
const RestaurantMenuIcons = RestaurantMenuIcon;
import Icon from 'react-native-vector-icons/FontAwesome';
function HomeScreen({props,navigation}) {
    return (
      <>
        <MyHomeComponent navigation={navigation.openDrawer} />
        <ScrollView style={styles.container}>
          <View style={styles.sliderContainer}>
            <Swiper autoplay height={200} horizontal={false} activeDotColor="blue" dotColor="white" >
            <View style={styles.slide}>
              <Image source={require('../assets/Banner/bannerImage1.jpg')}
                resizeMode="cover" style={styles.sliderImage}
              />
            </View>   
            <View style={styles.slide}>
              <Image source={require('../assets/Banner/bannerImage2.jpg')}
              resizeMode="cover" style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/Banner/bannerImage3.jpg')} 
              resizeMode="cover" style={styles.sliderImage}
              />
            </View>
          </Swiper>
          </View>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
              <View style={styles.iconstyle}>
              {/* <RestaurantMenuIcons /> */}
              <Icon name="hotel" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
              <View style={styles.iconstyle}>
                {/* <FastfoodIcon/> */}
                <Icon name="mobile" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Laptops</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
            <View style={styles.iconstyle}>
                {/* <SportsEsportsIcon /> */}
                <Icon name="magic" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Computer</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Icon name="ice-cream-outline" size={27} color="#6200EE" />
            </View>
              <Text style={styles.categoryBtnTxt}>Keyboard</Text>
            </TouchableOpacity> */}
          </View>
          <View style={[styles.categoryContainer,{marginTop:5}]}>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
            <View style={styles.iconstyle}>
                {/* <VideoCallIcon /> */}
                <Icon name="photo" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Mouse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
            <View style={styles.iconstyle}>
                {/* <HeadsetMicIcon  /> */}
                <Icon name="laptop" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Watches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate('SubCategory',{title:'Restaurant'})}>
            <View style={styles.categoryIcon}>
            <View style={styles.iconstyle}>
                {/* <DevicesIcon /> */}
                <Icon name="car" size={30} color="#6200EE" />
              </View>
            </View>
              <Text style={styles.categoryBtnTxt}>Cars</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <Icon name="pizza" size={27} color="#6200EE" />
            </View>
              <Text style={styles.categoryBtnTxt}>Hotel</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.cardsWrapper}>
            <Text
              style={{
                fontSize:18,
                // fontWeight:500,
                color:'#000'
              }}
            >Recently Viewed</Text>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/Banner/bannerImage1.jpg')} resizeMode="cover" style={styles.cardImage}/>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                <Text style={{color:'red'}}>No Ratings</Text>
                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/Banner/download1.jpg')} resizeMode="cover" style={styles.cardImage}/>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                <Text style={{color:'red'}}>No Ratings</Text>
                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/Banner/download2.jpg')} resizeMode="cover" style={styles.cardImage}/>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                <Text style={{color:'red'}}>No Ratings</Text>
                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/Banner/download3.jpg')} resizeMode="cover" style={styles.cardImage}/>
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                <Text style={{color:'red'}}>No Ratings</Text>
                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    sliderContainer:{
      height:200,
      width:'90%',
      marginTop:10,
      justifyContent:'center',
      alignSelf:'center',
      borderRadius:8
    },
    wrapper:{},
    slide:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'transparent',
      borderRadius:8
    },
    sliderImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8
    },
    categoryBtn:{
      flex:1,
      width:'30%',
      marginHorizontal:0,
      alignSelf:'center',
    },
    categoryContainer:{
      flexDirection:'row',
      width:'90%',
      alignSelf:'center',
      marginTop:20,
      marginBottom:5
    },
    categoryIcon:{
      borderWidth:0,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      marginHorizontal:0,
      alignSelf:'center',
      width:60,
      height:60,
      backgroundColor:'pink',
      borderRadius:50
    },
    categoryBtnTxt:{
      alignSelf:'center',
      marginTop:5,
      color:'#000'
    },
    cardsWrapper:{
      marginTop:20,
      width:'90%',
      alignSelf:'center'
    },
    card:{
      height:100,
      marginVertical:10,
      flexDirection:'row',
      shadowColor:'#999',
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:5,
    },
    cardImgWrapper:{
      flex:1,
    },
    cardImage:{
      height:'100%',
      width:'100%',
      alignSelf:'center',
      borderRadius:8,
      borderBottomRightRadius:0,
      borderTopRightRadius:0,
    },
    cardInfo:{
      flex:2,
      padding:10,
      borderColor:'#ccc',
      borderWidth:1,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
      backgroundColor:"#fff",
    },
    cartTitle:{
      fontWeight:'bold'
    },
    cartDetails:{
      fontSize:12,
      color:'#444'
    },
    iconstyle:{
      color:'#6200EE',
    }
  });

  export default HomeScreen;


  