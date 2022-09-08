import * as utils from '@dcl/ecs-scene-utils';
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
        position: new Vector3(79.35, 3, 23.9),
        scale: new Vector3(0.35, 0.35, 0.35),
        rotation: Quaternion.Euler(-5,120,-15)
    }))
    // teleport to secret room
    secretRoom.addComponent(
        new OnClick(
            ()=>{
                portal(
                    new Transform({
                        position: new Vector3(79, 0.5, 24),
                        scale: new Vector3(0.5, 0.5, 0.5)})
                )
            },{
                button: ActionButton.POINTER, hoverText: "Secret Room",showFeedback: true, distance: 6
            }
        )
    )
    
    // Entity
    const coat = new GLTFShape('models/Cross.glb')
    // stand desk
    obj(coat,new Transform({
        position: new Vector3(39.2, 26.3, 38.40),
        scale: new Vector3(3, 3, 3),
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    // teleport back
    const back = new Entity()
    engine.addEntity(back)
    back.addComponent(bookModel)
    back.addComponent(new Transform({
        position:new Vector3(39, 28, 40),
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