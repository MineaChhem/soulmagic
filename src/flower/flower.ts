
export class Flower extends Entity{
    constructor(model: GLTFShape, transform: Transform) {
        super()
        engine.addEntity(this)
        this.addComponent(model)
        this.addComponent(transform)
    }
}
    let flower : Flower[] = []

function test(model:GLTFShape,transform:Transform){
    const test = new Entity()
    test.addComponent(model)
    test.addComponent(transform)
    engine.addEntity(test)
}

export function bloom(){
    let a = 7
    for(a=0;a<7;a++){
        test(new GLTFShape('models/compose.glb'),
        new Transform({
            position:  new Vector3(1+a, 0, 1)
        }))
    }
}