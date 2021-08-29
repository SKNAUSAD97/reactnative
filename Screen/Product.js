import React, {useRef} from 'react';
import { View, Text, StyleSheet, ScrollView,Image, TouchableOpacity, Platform,Dimensions, StatusBar} from "react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const Product = ({props,route,navigation}) =>{
    const itemData = route.params.item;
    const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
    const MAX_HEIGHT = 350;
    const navTitleView = useRef(null);

    return(
        <>
        <View style={styles.container}>
             <ImageHeaderScrollView
                maxHeight={200}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                headerImage={require("../assets/Banner/bannerImage2.jpg")}
                renderForeground={() => (
                    <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                    <TouchableOpacity onPress={() => console.log("tap!!")}>
                        <Text style={{ backgroundColor: "transparent" }}></Text>
                    </TouchableOpacity>
                    </View>
                )}
                renderForeground={() => (
                    <View style={styles.titleContainer}>
                      <Text style={styles.imageTitle}>Asus Zenphone</Text>
                    </View>
                  )}
                  renderFixedForeground={() => (
                    <Animatable.View style={styles.navTitleView} ref={navTitleView}>
                      <Text style={styles.navTitle}>Asus Zenphone</Text>
                    </Animatable.View>
                  )}
                >
                <View style={{ height: 1000 }}>
                <TriggeringView
                    style={styles.section}
                    onHide={() => navTitleView.current.fadeInUp(200)}
                    onDisplay={() => navTitleView.current.fadeOut(100)}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>Overview</Text>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                        <View style={styles.iconstyle}>
                          {/* <StarBorderIcon /> */}
                        </View>
                        <Text style={{marginHorizontal: 2}}></Text>
                        <Text>No Reviews</Text>
                        </View>
                    </View>
                    </TriggeringView>
                    <View style={[styles.section, styles.sectionLarge]}>
                    <Text style={styles.sectionContent}>
                    We and our partners store and/or access information on a device, 
                    such as cookies and process personal data, such as unique identifiers and 
                    standard information sent by a device for personalised ads and content, ad
                     and content measurement, and audience insights, as well as to develop and improve products.
                    </Text>
                    </View>
                    <View style={styles.section}>
                    <View style={styles.categories}>
                    <TouchableOpacity>
                        <View style={styles.categoryContainer}>
                        <View style={styles.iconstyletag}>
                          {/* <LocalOfferIcon /> */}
                        </View>
                            <Text style={styles.category}>Laptop</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.categoryContainer}>
                            <View style={styles.iconstyletag}>
                              {/* <LocalOfferIcon /> */}
                            </View>
                            <Text style={styles.category}>Computer</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.categoryContainer}>
                            <View style={styles.iconstyletag}>
                              {/* <LocalOfferIcon /> */}
                            </View>
                            <Text style={styles.category}>Key</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.categoryContainer}>
                            <View style={styles.iconstyletag}>
                              {/* <LocalOfferIcon /> */}
                            </View>
                            <Text style={styles.category}>Mouse</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                
                </ImageHeaderScrollView>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: 250,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
    },
    name: {
      // fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: 18,
      // fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: 16,
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#6200EE',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
    },
    navTitleView: {
      height:Platform.OS === 'ios' ? 90 : 55,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 200,
    },
    iconstyle:{
      color:'#6200EE',
    },
    iconstyletag:{
      color:'#fff',
    }
  });
export default Product;