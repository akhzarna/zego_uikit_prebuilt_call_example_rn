import React, { useEffect } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG, GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import KeyCenter from "./KeyCenter";

export default function CallPage(props) {
    const { route } = props;
    const { params } = route;
    const { userID, userName } = params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                callID='rngroup12345678'
                
                config={{
                    // ...GROUP_VOICE_CALL_CONFIG,
                    ...GROUP_VIDEO_CALL_CONFIG,
                    onHangUp: () => {
                        props.navigation.navigate('HomePage');
                    },
                    durationConfig: {
                        isVisible: true,
                        onDurationUpdate: (duration) => {
                            console.log('########CallPage onDurationUpdate', duration);
                            if (duration === 5) {
                                ZegoUIKitPrebuiltCallService.hangUp();
                            }
                        }
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});
