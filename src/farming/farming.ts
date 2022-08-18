import { NPC } from '@dcl/npc-scene-utils';
import { Dialog } from '@dcl/npc-scene-utils';
export function farming(model: string, transform:Transform){
    // const farmer = new Entity()
    // farmer.addComponent(new GLTFShape(model))
    // farmer.addComponent(transform)
    // engine.addEntity(farmer)
    const farmer_chat: Dialog[] = [
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
            text: "I am farmer from SoulMagic School, I will introduce you about farming!!!",
            // isQuestion: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            // three
            name:'conversation-three',
            text:'Do You Want To Explore Our Farming?',
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
            text:"First! You need to get seed from NFT Item for plant",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Second Waiting for plant grown up full size,And than harvest it!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"You can plant by doing step by step!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Have a good day Sir/M'dam:)!",
            triggeredByNext() {
                farmer.playAnimation('',true,3)
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
    let farmer = new NPC(transform, model,
        () => {
            log('activate')
            farmer.talk(farmer_chat,0)
        },{
            idleAnim: 'play',
            // portrait:{path: '', height:350, width: 350},
            turningSpeed: 2,
            faceUser: true,
            darkUI: true,
            coolDownDuration: 2,
            hoverText:'Farmer',
            reactDistance: 6,
            onlyETrigger: false,
            onlyClickTrigger: true,
            onlyExternalTrigger: false,
            continueOnWalkAway: false,
            onWalkAway() {
                log('WalkAway')
                this.idleAnim = 'play'
                
            }
        })
}