
export function scene(model: string,transform: Transform){
    const base = new Entity()
    base.addComponent(new GLTFShape(model))
    base.addComponent(transform)
    engine.addEntity(base)
    // engine.removeEntity(base)
}