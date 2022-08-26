import { farming } from './farming/farming';
import { scene } from './scene/scene';
import { movePlayer} from './teleport/movePlayer';
import { mining } from './mining/mining';
import { compose} from './flower/compose';
import { teacher } from './teacher/teacher';
import { bloom } from './flower/flower';

// scene('models/soulmagic_environment-rev18_guide (1).glb',
// new Transform({
//   position: new Vector3(43.3, 0, 48),
//   rotation: Quaternion.Euler(0,0,0),
//   scale: new Vector3(1.45, 1.45, 1.45)
// }))

// castle
scene('models/soulmagic_environment-rev35.glb',
new Transform({
  position: new Vector3(46, 0, 43),
  scale: new Vector3(7.55,7.55,7.55),
  rotation: Quaternion.Euler(0,0,0)
}))

// background tree
scene('models/soulmagic_environment-rev30_tree.glb',
new Transform({
    position: new Vector3(43.3, 0, 48),
    rotation: Quaternion.Euler(0,0,0),
    scale: new Vector3(14.3, 14.3, 14.3)
}))

// teleport
movePlayer()

// farming
farming("models/npc.glb",
new Transform({
  position: new Vector3(25, 0, 35),
  scale: new Vector3(2.3, 2.3, 2.3),
  rotation: Quaternion.Euler(0 ,180 ,0)
}))

// mining
// mining('models/mining.glb',
// new Transform({
//   position: new Vector3(5, 0, 11),
//   scale: new Vector3(2.3, 2.3, 2.3),
//   rotation: Quaternion.Euler(0 ,0 ,0)
// }))

// teacher
teacher('models/teacher.glb',
new Transform({
  position: new Vector3(48 , 16, 32),
  // position: new Vector3(3, 0, 3),
  scale: new Vector3(0.06, 0.06, 0.06),
  rotation: Quaternion.Euler(0,0,0)
})
)


compose('models/compose.glb',
new Transform({
  position: new Vector3(27, 0, 38),
  scale: new Vector3(2.3, 2.3, 2.3),
  rotation: Quaternion.Euler(0 ,-90 ,0)
}))

// bloom()