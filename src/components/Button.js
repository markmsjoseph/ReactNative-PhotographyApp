import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';


  const styles = {
    buttonStyles:{
      flex:1,
      alignSelf:'stretch',
      backgroundColor:'#fff',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#007aff',
      marginLeft:5,
      marginRight:5
    },
    innerButtonText:{
      alignSelf:'center',
      color:'#007aff',
      fontSize:16,
      fontWeight:'600',
      paddingTop:10,
      paddingBottom:10

    }
  }

class Button extends Component{

  constructor(props) {
      super(props);

  }

    render(){

              return(
                <TouchableOpacity style={styles.buttonStyles}>
                  <Text style={styles.innerButtonText} onPress={this.props.onPress}> {this.props.title}</Text>
                </TouchableOpacity>

              );
    }

}//end class


export default Button;
