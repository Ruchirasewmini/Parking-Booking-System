import React,{useState} from 'react';
import {View,Text,Stylesheet,ScrollView} from 'react-native';
import CustomInpt from'./src/components/CustomInput/CustomInpt';
import Custombutton from './CustomButton';
import SocialSignInbuttons from './src/components/SocialSignInButtons/SocialSignInButtons';
import SocialSignInButtons from './src/components/SocialSignInButtons';

const SignUpScreen = () => {  
    const [username, setusername] = useState(''); 
    const [email,setEmail]=useState('');
    const [password,  setPassword] = useState('');
    const [passwordRepeat,  setPasswordRepeat] = useState('');

    const navigation = usenavigation();

 const onRegisterPressed = ()=> {
  navigation.navigate('ConfirmEmail');

 };
  

  const onSignInPressed = ()=> {
    navigation.navigate('SignIn');

  };
  const onTermsOfUsePressed = ()=> {
    console.warn("onTermsOfUsePressed");
  };
  const onPrivacyPressed = ()=> {
    console.warn("onPrivacyPressed");
  };
    
 return (
    <scrollView showsVerticalScrollIndicator ={false} >
        
    <view style={StyleSheet.root}>
        
        <Text style={Stylesheet.title}>Create an account</Text>
        

        <CustomInput 
        placeholder="Username"
        value={username}
        setValue={setusername}
        />
        <CustomInput p
        laceholder= "Email" 
        value={email} 
        setvalue={setEmail}
        />
        <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        securetextEntry

        />
        <CustomInput
        placeholder="repeat Password"
        value={passwordRepeat}
        setvalue={setpasswordRepeat}
        securetextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

       <Text style={styles.text}>
        By registering,you confirm that you accept our{''}
        <Text style={styles.link}onPresse={onTermsOfUsePressed}>
        Terms of Use
        </Text> {''}
        and {''}
        <Text style={styles.link}onPresse={onPrivacyPressed}> 
        privacy Policy
        </Text>
        </Text>

<SocialSignInButtons/> 
    
        <CustomButton 
         text="Have an account? Sign In" 
         onPress={onSignInPressed}
         type="TERTIARY"
         
         />
        

    </view>
    </scrollView>
 );
 
 };
 const styles=StyleSheet.create({
    root:{
    alignItems : 'center' ,
    padding:20, 
    },

    title:{
        fontSize:24,
        fontweight:'bold',
        color:'#851C60',
        margin:10,

    },

    text:{
        color:'gray',
        marginVertical:10,
        
    },

    link:{
        color:'#FD8875'
    },
 });

 export default SignUpScreen;


 