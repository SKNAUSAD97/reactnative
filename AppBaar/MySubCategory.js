
  import React from "react";
  import { Appbar } from 'react-native-paper';  
  const MySettingComponent = (props) => {
    const _goBack = () => console.log('Went back');
  
    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={()=>props.navigation.navigate('Home')} />
        <Appbar.Content title="SubCategory" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    );
  };

  export default MySettingComponent;