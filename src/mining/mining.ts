import { NPC } from '@dcl/npc-scene-utils';
import { Dialog } from '@dcl/npc-scene-utils';
export function mining(model: string, transform:Transform){
    
    const miner_chat: Dialog[] = [
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
            text: "I am miner from SoulMagic School, I will introduce you about mining!!!",
            // isQuestion: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            // three
            name:'conversation-three',
            text:'Do You Want To Explore Our Mining?',
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
            text:"First! You need to finding Crystal Rock and than click on mining on your cursor",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Second Waiting for mining until it getting finish,And than harvest it!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"You can mining by doing step by step!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Have a good day Sir/M'dam:)!",
            triggeredByNext() {
                miner.playAnimation('',true,3)
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
    let miner = new NPC(transform, model,
        () => {
            log('activate')
            miner.talk(miner_chat,0)
        },{
            idleAnim: 'Idle',
            // portrait:{path: '', height:350, width: 350},
            turningSpeed: 2,
            faceUser: true,
            darkUI: true,
            coolDownDuration: 2,
            hoverText:'Miner',
            reactDistance: 3,
            onlyETrigger: false,
            onlyClickTrigger: true,
            onlyExternalTrigger: false,
            continueOnWalkAway: false,
            onWalkAway() {
                log('WalkAway')
            }
        })
}