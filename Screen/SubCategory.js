import React from "react";
import { View, Text, StyleSheet, ScrollView,Image, TouchableOpacity} from "react-native";
import MySubCategory from "../AppBaar/MySubCategory";

const SingleProduct = ({props,navigation}) =>{
    return(
        <>
        <MySubCategory navigation={navigation}></MySubCategory>
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize:15,fontWeight:'bold',marginLeft:20,marginTop:10}}>SubCategory</Text>
                    <View style={styles.cardsWrapper}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:1})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download4.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:2})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download5.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:3})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download6.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:4})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download7.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:5})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download8.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:6})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download9.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:7})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download9.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Product',{item:8})}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image source={require('../assets/Banner/download.jpg')} resizeMode="cover" style={styles.cardImage}/>
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cartTitle}>Asus Zenphone</Text>
                                <Text style={{color:'red'}}>No Ratings</Text>
                                <Text style={styles.cartDetails}> simply dummy text of the printing and typesetting industry.Lorem Ipsum has been </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    cardsWrapper:{
        marginTop:10,
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
      }
});
export default SingleProduct;