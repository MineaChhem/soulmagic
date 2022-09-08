import { NPC, Dialog } from '@dcl/npc-scene-utils';

export function teacher(model: string, transform:Transform){
    const teacher_chat: Dialog[] =[
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
            text: "I am wizard teacher from SoulMagic School, I will introduce you about SoulMagic School!!!",
            // isQuestion: true,
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            // three
            name:'conversation-three',
            text:'Do You Want To Explore Our teaching?',
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
            isQuestion: true,
            buttons:[
                {label: 'Yes', goToDialog:'yes'},
                {label: 'No',goToDialog:'no'}
            ]
        },{
            name:'yes',
            text:"First! You need to register your name",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Second Waiting for wait for verify your name",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"So you can study at soul magic school by doing step by step!!!",
            offsetX:60,
            offsetY:0,
            fontSize:34,
            typeSpeed:30,
        },{
            text:"Have a good day Sir/M'dam:)!",
            triggeredByNext() {
                teacher.playAnimation('play',true,3)
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
    let teacher = new NPC(transform,model,
        ()=>{
            log('activate')
            teacher.talk(teacher_chat,0)
        },{
            idleAnim: 'play',
            portrait:{
                path: 'images/teacher.png',
                height:400, 
                width: 400,
                offsetX:-50,
                offsetY:79,
                section:{sourceHeight:400, sourceWidth:400}
            },
            onlyClickTrigger: true,
            faceUser: true,
            reactDistance: 6,
            darkUI: true,
            onWalkAway() {
                this.idleAnim = 'play'
            },
        })
}