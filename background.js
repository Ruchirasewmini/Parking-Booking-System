import React from 'react';
import{view,ImageBackground} from 'react-native';

const Background =({children})=>{
    return (
        <view>cs
            <ImageBackground source={require("./asssets/leaves.jpg")} style={{height:'100%'}} />
            <view style={{position:"absolute"}}>
                {children}
            </view>
        </view>
    );
}
export default Background;