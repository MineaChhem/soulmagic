import * as utils from '@dcl/ecs-scene-utils';
import { getExplorerConfiguration } from '@decentraland/EnvironmentAPI';
import { movePlayerTo } from '@decentraland/RestrictedActions';

export function movePlayer(): void{
    function obj(model: GLTFShape, transform: Transform){
        const obj = new Entity()
        obj.addComponent(model)
        obj.addComponent(transform)
        engine.addEntity(obj)
    }
    // HideRoom 
    const bookModel = new GLTFShape('models/Spellbook.glb')

    // rotation system
     class SimpleRotate implements ISystem {
        update() {
        //   let transform = secretRoom.getComponent(Transform)
          secretRoom.getComponent(Transform).rotate(Vector3.Up(), 1)
        //   back.getComponent(Transform).rotate(Vector3.Up(),1)
        }
      }
      engine.addSystem(new SimpleRotate())

    // telaport book
    const secretRoom = new Entity()
    engine.addEntity(secretRoom)
    secretRoom.addComponent(bookModel)
    secretRoom.addComponent(new Transform({
        position: new Vector3(78.3, 2.3, 23),
        scale: new Vector3(0.35, 0.35, 0.35),
        rotation: Quaternion.Euler(-5,120,-15)
    }))
    // teleport to secret room
    secretRoom.addComponent(
        new OnClick(
            ()=>{
                portal(
                    new Transform({
                        position: new Vector3(78.5, 0, 22.5),
                        scale: new Vector3(0.5, 0.5, 0.5)})
                )
                // engine.addEntity(recall)
                // teleport.play()
                // utils.setTimeout(2300, ()=>{
                //     movePlayerTo({x:-0.5, y:21, z:-4},{x:-10, y:21, z:-15})
                //     engine.removeEntity(recall)
                // })
            },{
                button: ActionButton.POINTER, hoverText: "Secret Room",showFeedback: true, distance: 6
            }
        )
    )
    
    // secretRoom.addComponent(
    //     new utils.TriggerComponent(
    //         new utils.TriggerSphereShape(3),{
    //             onCameraEnter() {
    //                 log('activate')
    //                 utils.setTimeout(3000, ()=>{
    //                     movePlayerTo({x:-0.5, y:21, z:-4},{x:-10, y:3, z:-15})
    //                 })
    //             }
    //         }
    //     )
    // )
    
    // Entity
    const coat = new GLTFShape('models/Cross.glb')
    // stand desk
    obj(coat,new Transform({
        position: new Vector3(41.9, 26.3, 36.1),
        scale: new Vector3(3, 3, 3),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    // teleport back
    const back = new Entity()
    engine.addEntity(back)
    back.addComponent(bookModel)
    back.addComponent(new Transform({
        position:new Vector3(42, 28, 36.2),
        scale: new Vector3(0.3, 0.3, 0.3),
        rotation: Quaternion.Euler(-5,90,-15)
    }))
    back.addComponent(
        new OnClick(
            ()=>{
                log("go back")
                utils.setTimeout(168,()=>{
                    movePlayerTo({x:83, y:2.3, z:23},{x:1, y:1, z:23})
                })
            },{
                button: ActionButton.POINTER, hoverText: "Back", showFeedback: true, distance: 6
            }
        )
    )
    // let animator = new Animator()
    // let animator = new Animator()
    // const recall = new Entity()
    // recall.addComponent(new GLTFShape('models/recall.glb'))
    // recall.addComponent(new Transform({
    //     position: new Vector3(-24.85, 0, 8.06),
    //     scale: new Vector3(1, 1, 1)
    // }))
    // let teleport = new AnimationState('recallAction.003')
    // recall.addComponent(animator).addClip(teleport)
    // engine.removeEntity(recall)
}
function portal(transform: Transform){
    let animator = new Animator()
    const recall = new Entity()
    recall.addComponent(new GLTFShape('models/recall.glb'))
    recall.addComponent(transform)
    let teleport = new AnimationState('recallAction.003')
    teleport.play()
    recall.addComponent(animator).addClip(teleport)
    engine.addEntity(recall)
    teleport.play()
    utils.setTimeout(2200, ()=>{
        movePlayerTo({x:43.5, y:30, z:38},{x:60, y:30, z:48})
        engine.removeEntity(recall)
    })
}