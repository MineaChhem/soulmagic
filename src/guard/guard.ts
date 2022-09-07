import { NPC } from '@dcl/npc-scene-utils';
import { Dialog } from '@dcl/npc-scene-utils';
export function guard(model: string, transform:Transform){
    
    const guard_chat: Dialog[] = [
        {   
            // one
            name:'conversation-one',
            text: '<color="white">Hello Dear Sir/M"dam!!! Welcome to Soul Magic!</color>',
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            
        },{
            // two
            name:'conversation-two',
            text: "I am security from SoulMagic School, I will introduce you about soul magic!!!",
            // isQuestion: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            // three
            name:'conversation-three',
            text:'Do You Want To Explore Our school?',
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isQuestion: true,
            buttons:[
                {label: 'Yes', goToDialog: 'yes',triggeredActions() {
                    
                },},
                {label: 'No',goToDialog:'no',triggeredActions() {
                    
                },}
            ]
        },{
            name:'yes',
            text:"Welcome to school magic school!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Have a good day Sir/M'dam:)!",
            triggeredByNext() {
                guard.playAnimation('',true,3)
            },
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true
        },{
            name: 'no',
            text:"It's okay we can meet again some day.",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Goodbye see you later.!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isEndOfDialog: true,
        }
    ]
    let guard = new NPC(transform, model,
        () => {
            log('activate')
            guard.talk(guard_chat,0)
        },{
            idleAnim: 'play',
            portrait:{
                path:'images/guard.png',
                height:350, 
                width: 350,
                offsetX:-50,
                offsetY:50,
                section:{sourceHeight:1080, sourceWidth:1080}
            },
            turningSpeed: 2,
            faceUser: true,
            darkUI: true,
            coolDownDuration: 2,
            hoverText:'guard',
            reactDistance: 6,
            onlyETrigger: false,
            onlyClickTrigger: true,
            onlyExternalTrigger: false,
            continueOnWalkAway: false,
            onWalkAway() {
                log('WalkAway')
                guard.playAnimation('play')
            }
        })
}