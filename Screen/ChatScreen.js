
import { View, Button, StyleSheet, Text, TouchableOpacity,Image, ScrollView } from "react-native";
import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, Time, GiftedChat, Send } from 'react-native-gifted-chat';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ChatScreen = ({route,navigation}) =>{
const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hyy developer',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props) =>{
    return(
        <Bubble 
            {...props}
            wrapperStyle={{
                right:{
                    backgroundColor:'#6200EE'
                },
                left:{
                    backgroundColor:'green'
                }
            }}
            textStyle={{
                right:{
                    color:'#fff'
                },
                left:{
                    color:'#fff'
                }
            }}
        />
    );
  }
  const renderTime = (props) => {
    return (
      <Time
      {...props}
        timeTextStyle={{
          left: {
            color: 'white',
          },
        }}
      />
    );
  };
  const renderSend = (props) =>{
      return(
          <Send {...props}>
              <View>
                <Icon 
                    name="send-circle" size={35} color="#6200EE"
                    style={{marginBottom:5}}
                />
              </View>
          </Send>
      );
  }

  const scrollToBottomComponent = (props) =>{
    return(
        <Icon name="chevron-down" size={25} />
    );
  }

    return (
      <>
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderTime = {renderTime}
        />
      </>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft: '20px',
        paddingRight: '20px',
        alignItems: 'center',
        backgroundColor:'white'
      }
  });
  export default ChatScreen;