import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import { Group, LoopRepeat } from "three" // Import LoopRepeat from Three.js

useGLTF.preload("/robot_playground.glb")

export default function Model() {
  const { scene, animations } = useGLTF("/robot_playground.glb")
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    // Play the animation in a loop
    const action = actions["Experiment"]
    if (action) {
      action.play()
      action.setLoop(LoopRepeat, Infinity) // Correct way to enable looping
    }
  }, [actions])

  return (
    <group>
      <primitive object={scene} />
    </group>
  )
}
