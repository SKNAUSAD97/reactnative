import React from "react";
import { Appbar } from 'react-native-paper';
const MyHomeComponent = (props) => {
    const _goBack = () => console.log('Went back');
  
    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  
    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => props.navigation()} />
        <Appbar.Content title="Hii, Nausad" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    );
  };
  export default MyHomeComponent;