import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'; 
import { useParams } from 'react-router-dom';

const Room = () => {
    const {roomID}= useParams();
    let myMeeting= async (element)=>{
        const appID =1562346009;
        const serverSecret = "42cf7b5a6c143a7b9c90b8a39f89caca";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"raunak" );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url:
               window.location.protocol + '//' + 
               window.location.host + window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
        });
    }
  return (
    <div ref={myMeeting}>Room</div>
  )
}

export default Room