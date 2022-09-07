import { farming } from './farming/farming';
import { scene } from './scene/scene';
import { movePlayer} from './teleport/movePlayer';
import { compose} from './flower/compose';
import { teacher } from './teacher/teacher';
import { guard } from './guard/guard';

scene('models/soulmagic_environment-rev33_castle.glb',
new Transform({
  position: new Vector3(47.5, 0.1, 40.5),
  scale: new Vector3(14.3,14.3,14.3),
  rotation: Quaternion.Euler(0,0,0)
}))

// background tree
scene('models/soulmagic_environment-rev33_tree.glb',
new Transform({
    position: new Vector3(49.8, 0, 39.32),
    rotation: Quaternion.Euler(0,0,0),
    scale: new Vector3(14.38, 14.38, 14.38)
}))

// teleport
movePlayer()

// farming
farming("models/farmernpc.glb",
new Transform({
  position: new Vector3(25, 0, 35),
  scale: new Vector3(36.5, 36.5, 36.5),
  rotation: Quaternion.Euler(0 ,180 ,0)
}))

// guard
guard('models/guard.glb',
new Transform({
  position: new Vector3(42, 0, 41),
  scale: new Vector3(0.34, 0.34, 0.34),
  rotation: Quaternion.Euler(0, 180, 0)
}))

// teacher
teacher('models/teacher_npc.glb',
new Transform({
  position: new Vector3(48 , 16, 32),
  scale: new Vector3(0.06, 0.06, 0.06),
  rotation: Quaternion.Euler(0,0,0)
})
)

// flower
compose('models/compose.glb',
new Transform({
  position: new Vector3(27, 0.1, 38),
  scale: new Vector3(2.3, 2.3, 2.3),
  rotation: Quaternion.Euler(0 ,-90 ,0)
}))