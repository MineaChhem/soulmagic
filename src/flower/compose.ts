import { NPC } from '@dcl/npc-scene-utils';
import * as utils from '@dcl/ecs-scene-utils';
import * as ui from '@dcl/ui-scene-utils';

export function compose(model: string, transform: Transform){
    // stand model
    let harvest = new NPC(transform,model,
        ()=>{
            log('activate')
            flower.show()
            harvest.playAnimation('flowers harvest',true)
                utils.setTimeout(1000,()=>{
                    engine.removeEntity(harvest)
                    engine.addEntity(plant)
                })
            if(flower.read() >= 0)
            return flower.increase(1)
        },{
            idleAnim: 'flower_idle',
            onlyClickTrigger: true,
            hoverText: 'harvest',
            reactDistance: 6,
            faceUser: false,
            // onlyExternalTrigger: true,
        })
    engine.removeEntity(harvest)
    // function
    function cut(){
        harvest.playAnimation('flower_idle',false)
        engine.removeEntity(grown)
        engine.addEntity(harvest)
    }

    // animator grown
    let grown = new NPC(transform,model,
        ()=>{
            log('Grown')
        },{
            faceUser: false,
            onlyExternalTrigger: true,
            reactDistance: 0,
        })
        engine.removeEntity(grown)

    // button
        grown.addComponent(
            new OnClick(
                ()=>{
                 log('Growing')   
                },{
                    button: ActionButton.POINTER,showFeedback: false, distance: 0
                }
            )
        )
    // bloom function
    function bloom(){
        grown.playAnimation('sowing',true)
        utils.setTimeout(10000,()=>{
            grown.playAnimation('seeding_growth_up',true)
            utils.setTimeout(10000,()=>{
                grown.playAnimation('plant_growth_up',true)
                utils.setTimeout(300,()=>{
                    grown.playAnimation('plant_idle',false)
                    utils.setTimeout(10000,()=>{
                        grown.playAnimation('flowers_growth_up',true)
                        utils.setTimeout(0,()=>{
                            cut()
                        })
                    })
                })
            })
        })
    }

    // plant model
    const plant = new Entity()
    plant.addComponent(new GLTFShape(model))
    plant.addComponent(transform)
    engine.addEntity(plant)

    // set animator
    let land = new AnimationState('farmland')
    plant.addComponent(new Animator()).addClip(land)
    land.playing = false
    land.looping = false
    
    // button
    plant.addComponent(
        new OnClick(
            ()=>{
                log('activate Grown')
                if(seed.read() <= 0){
                    log('need seed')
                    ui.displayAnnouncement("You have no seed for plant",2,Color4.Red(),38,false)
                }else if(seed.read() > 0 ){
                    log('grown')
                    bloom()
                    engine.addEntity(grown)
                    engine.removeEntity(plant)
                    seed.decrease(1)
                }
            },{
                button: ActionButton.POINTER, hoverText: 'plant',showFeedback: true,distance: 6
            }
        )
    )
    // seed to plant
    const resource = new Entity()
    resource.addComponent(new PlaneShape)
    resource.addComponent(new Transform({
        position: new Vector3(30, 1, 35),
        scale: new Vector3(1, 1, 1),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    engine.addEntity(resource)
    resource.addComponent(
        new OnClick(
            ()=>{
                seed.show()
                if(seed.read() >= 0)
                return seed.increase()
            },{
                button: ActionButton.POINTER, hoverText: 'Seed', showFeedback: true, distance: 6
            }
        )
    )
    // ui seed
    let seed = new ui.UICounter(0, -60, 60, Color4.Yellow(), 60, true, 0)
    seed.hide()
    // ui flower
    let flower = new ui.UICounter(0, -60, 120, Color4.Green(), 60, true, 0)
    flower.hide()

    // let i = 5
    // for(i=0;i<6;i++){
    //     plant
    // }
}
